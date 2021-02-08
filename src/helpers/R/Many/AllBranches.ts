import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function getAllBranches(companyID) {
    return await
        getConnection()
            .createQueryBuilder()
            .select('branch')
            .from(Branch, 'branch')
            .leftJoinAndSelect('branch.company', 'company')
            .where('company.id =:id', {id: parseInt(companyID)})
            .getMany();
}