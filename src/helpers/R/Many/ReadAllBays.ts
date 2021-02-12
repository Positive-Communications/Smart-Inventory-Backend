import {getConnection} from "typeorm";
import Bays from "../../../entity/Bays";
import frisk from "../../../Auth/middleware";

const readAllBays = async (req, res) => {

    const bays = await getConnection().manager.find(Bays);

    res.json({bays: bays});
}

export default readAllBays;