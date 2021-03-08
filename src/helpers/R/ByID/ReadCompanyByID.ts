import {getConnection} from "typeorm";
import Company from "../../../entity/Company";

export default async function readCompanyByID(companyID) {

    try {

        return await
            getConnection()
                .createQueryBuilder()
                .select('company')
                .from(Company, 'company')
                .where('company.id =:id', {id: parseInt(companyID)})
                .leftJoinAndSelect('company.superAdmin', 'admin')
                .getOne();
    } catch (e) {
        console.log(e);
    }
}