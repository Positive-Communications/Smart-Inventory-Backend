import Gate from "../entity/Gate";
import AddGate from "../helpers/C/singles/AddGate";
import readAllGates from "../helpers/R/Many/ReadAllGates";

class GateManager{

    async registerGate(req, res){
        const gate = await AddGate(req.body);
         res.json({ gate: gate});
    }

    async availAllGates(req, res){
        const gates = await readAllGates()
        res.json({gates: gates});
    }

}

export default GateManager;