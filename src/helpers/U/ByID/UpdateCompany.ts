import {getConnection} from "typeorm";
import Company from "../../../entity/Company";

export default async function updateCompany(data) {
    try {

        return await
            getConnection()
                .createQueryBuilder()
                .update(Company)
                .where('company.id =:id', {id: parseInt(data.id)})
                .set({
                    name: data.name,
                    headOffice: data.headOffice,
                    email: data.email,
                    streetRoad: data.streetRoad,
                    primaryNumber: data.primaryNumber,
                    secondaryNumber: data.secondaryNumber
                })
                .execute();
    } catch (e) {

        console.log(e);
    }

}

let config = {
    name: "",
    headOffice: "",
    email:"",
    streetRoad: "",
    primaryNumber:"",
    secondaryNumber:""
}