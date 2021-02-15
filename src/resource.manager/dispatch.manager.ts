import saveDispatchTimes from "../helpers/C/singles/SaveDispatchTimes";
import getDispatchByBranch from "../helpers/R/ByBranch/GetDispatchByBranch";

class DispatchManager{

    async checkBranchDispatch(req, res){
        let dispatch = await getDispatchByBranch(req.params.branchID);
        res.json({dispatch: dispatch});
    }

    async createBranchDispatch(req, res){
        let dispatch = await saveDispatchTimes(req.body)
        res.json({dispatch:dispatch})
    }
}

export default DispatchManager;