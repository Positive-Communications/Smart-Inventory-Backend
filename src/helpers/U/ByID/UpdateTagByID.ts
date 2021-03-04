import { getConnection } from "typeorm";
import Gate from "../../../entity/Gate";
import Tags from "../../../entity/Tags";
import readGateByID from "../../R/ByID/ReadGateByID";

const updateTagByID = async (data) => {

    let gate = await getConnection().manager.findOne(Gate, data.gateID, { relations: ["presetMeta", "presetMeta.product"] });

    return await
        getConnection().createQueryBuilder()
            .update(Tags).set({
                status: data.status,
                isAssigned: true,
                isProductTag: true,
                product: gate.presetMeta.product
            }).where('id =:id', { id: data.tagID })
            .execute();

}

export default updateTagByID;