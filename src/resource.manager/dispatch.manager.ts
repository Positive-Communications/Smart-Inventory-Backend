import createOrderQue from "../helpers/C/singles/CreateOrderQue";
import saveDispatchTimes from "../helpers/C/singles/SaveDispatchTimes";
import saveOrder from "../helpers/C/singles/SaveOrder";
import getDispatchByBranch from "../helpers/R/ByBranch/GetDispatchByBranch";
import readOrderQue from "../helpers/R/ByBranch/ReadOrderQue";
import readOrderByNumber from "../helpers/R/Custom/ReadOrderByNumber";
import readAllOrders from "../helpers/R/Many/ReadAllOrders";

class DispatchManager {

    async checkBranchDispatch(req, res) {
        let dispatch = await getDispatchByBranch(req.params.branchID);
        res.json({ dispatch: dispatch });
    }

    async createBranchDispatch(req, res) {
        let dispatch = await saveDispatchTimes(req.body)
        res.json({ dispatch: dispatch })
    }

    async saveOrder(req, res) {
        res.json({ order: await saveOrder(req.body) });
    }

    async getAllOrders(req, res) {
        res.json({ orders: await readAllOrders() });
    }

    async getOrderByNumber(req, res) {
        res.json({ order: await readOrderByNumber(req.params.number) });
    }

    async saveOrderQue(req, res){
        res.json({orderQue: await createOrderQue(req.body)})
    }

    async getOrderQue(req, res){
        res.json({orderQue: await readOrderQue(req.params.id)})
    }

}

export default DispatchManager;