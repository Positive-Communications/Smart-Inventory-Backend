import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";
import readGateByID from "../ByID/ReadGateByID";

const assignProductToTag = async (gateID: number, tagID) => {

    try {
        return await
            getConnection().createQueryBuilder()
                .update(Tags).set({ isAssigned: true, status: "packed" })
                .where("id =:id", { id: tagID })
                .execute();

    } catch (e) {

    }


}

export default assignProductToTag;