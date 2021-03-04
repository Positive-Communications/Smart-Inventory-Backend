import saveCompany from "../helpers/C/singles/saveCompany";
import readCompanyByID from "../helpers/R/ByID/ReadCompanyByID";
import readAllCompanies from "../helpers/R/Many/ReadAllCompanies";


class CompanyHandler {

    async createCompany(req, res) {
        let company = await saveCompany(req.body);
        res.json({company: company});
    }

    async getCompanyByID(req, res){
        let company = await readCompanyByID(req.params.id);
        res.json({company: company});
    }

    async getAllCompanies(req, res){
        let companies = await readAllCompanies();
        res.json({companies: companies});
    }

}

export default CompanyHandler;