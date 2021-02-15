import saveCompany from "../helpers/C/singles/saveCompany";
import readCompanyByID from "../helpers/R/ByID/ReadCompanyByID";


class CompanyHandler {

    async createCompany(req, res) {
        let company = await saveCompany(req.body);
        res.json({company: company});
    }

    async getCompanyByID(req, res){
        let company = await readCompanyByID(req.params.id);
        res.json({company: company});
    }

}

export default CompanyHandler;