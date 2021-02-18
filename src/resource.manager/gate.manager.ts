import AddGate from "../helpers/C/singles/AddGate";
import readAllGates from "../helpers/R/Many/ReadAllGates";
import updateGate from "../helpers/U/ByID/UpdateGate";

class GateManager{

    async registerGate(req, res){
        const gate = await AddGate(req.body);
         res.json({ gate: gate});
    }

    async availAllGates(req, res){
        const gates = await readAllGates()
        res.json({gates: gates});
    }

    async updateGate(req, res){
        const gate = await updateGate(req.body, req.params.id);
        res.json({gate: gate});
    }

}

export default GateManager;