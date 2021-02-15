import {getConnection} from "typeorm";
import { displayPartsToString } from "typescript";
import Branch from "../../../entity/Branch";

export default async function updateBranch(data) {

    return await
        getConnection()
            .createQueryBuilder()
            .update(Branch)
            .where('id =:id', {id: parseInt(data.branchID)})
            .set({
                    city: data.city,
                    info: data.info,
                    isActive: true,
                    streetRoad: data.streetRoad,
                    phone: data.phone,
                    email: data.email,
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