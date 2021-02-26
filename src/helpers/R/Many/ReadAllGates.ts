import {getConnection} from "typeorm";
import Gate from "../../../entity/Gate";

const readAllGates = async () => {
    return await
        getConnection().manager.find(Gate, {relations: ["stores", "presetMeta", "presetMeta.preset", "presetMeta.product", "presetMeta.product.pallet", "presetMeta.product.pallet.tag"]});
}

export default readAllGates;