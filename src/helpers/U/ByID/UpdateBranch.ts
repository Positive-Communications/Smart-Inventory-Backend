import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function updateBranch(data) {

    return await
        getConnection()
            .createQueryBuilder()
            .update(Branch)
            .where('id =:id', {id: parseInt(data.branchID)})
            .set({
                code: "",
                info: "",
                city: "",
                isActive: false,
                phone: "",
                email: "",
                streetRoad: "",
            })
            .execute();
}

let config = {
    code: "",
    info: "",
    city: "",
    isActive: false,
    phone: "",
    email: "",
    streetRoad: "",
    branchID: ""
}