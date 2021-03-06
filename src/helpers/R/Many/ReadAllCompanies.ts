import { getConnection } from "typeorm"
import Company from "../../../entity/Company"

const readAllCompanies = async () => {

    return await
        getConnection().manager.find(Company, {relations: ["branches", "superAdmin"]});
}

export default readAllCompanies;