import Company from "../../entity/Company";
import {getConnection} from "typeorm";

export default async function saveCompany(data) {

    let company = new Company();

    company.name = data.name;
    company.headOffice = data.headOffice;
    company.email = data.email;
    company.streetRoad = data.streetRoad;
    company.primaryNumber = data.primaryNumber;
    company.secondaryNumber = data.secondaryNumber;

    try{
        return await
            getConnection().manager.save(company)
    }catch (e) {
        console.log(e)
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