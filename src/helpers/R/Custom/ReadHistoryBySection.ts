import { getConnection } from "typeorm";
import Sections from "../../../entity/Sections";
import readHistoryByGate from "./ReadHistoryByGate";

const getProductsBySection = async (id) => {

    let section = await getConnection().manager
        .findOne(Sections, parseInt(id),
            { relations: ["presets", "presets.meta", "presets.meta.gate"] });

    let gates = section.presets.map(preset => {
        return preset.meta
    })[0].map(meta => { return meta.gate })

    let history = [];

    for (let gate of gates) {
        history.push(await readHistoryByGate(gate.id))
    }

    return history;


}


export default getProductsBySection;
