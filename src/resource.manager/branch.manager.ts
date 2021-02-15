import saveBranches from "../helpers/C/singles/saveBranches";
import getBranchInfo from "../helpers/R/Custom/BranchInfo";
import readAllBranches from "../helpers/R/Many/readAllBranches";
import updateBranch from "../helpers/U/ByID/UpdateBranch";

class BranchManager {

    async createBranch(req, res) {
        const branch = await saveBranches(req.body);
        res.json({ branch: branch });
    }

    async summonBranch(req, res){
        const branch = await getBranchInfo(req.params.id);
        res.json({branch: branch});
    }

    async getAllBranches(req, res){
        const branches = await readAllBranches();
        res.json({branches:branches});
    }

    async updateBranchFile(req, res){
        console.log(req.body);
        const branch = await updateBranch(req.body);
        res.json({branch: branch});
    }

}

export default BranchManager;