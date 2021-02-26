import { getConnection } from "typeorm";
import Gate from "../entity/Gate";
import AddGate from "../helpers/C/singles/AddGate";
import readGateByID from "../helpers/R/ByID/ReadGateByID";
import readHistoryByGate from "../helpers/R/Custom/ReadHistoryByGate";
import readAllGates from "../helpers/R/Many/ReadAllGates";
import updateGate from "../helpers/U/ByID/UpdateGate";

class GateManager {

    async registerGate(req, res) {
        const gate = await AddGate(req.body);
        res.json({ gate: gate });
    }

    async availAllGates(req, res) {
        const gates = await readAllGates()
        res.json({ gates: gates });
    }

    async updateGate(req, res) {
        const gate = await updateGate(req.body, req.params.id);
        res.json({ gate: gate });
    }

    async readGate(id) {
        return await readGateByID(id);
    }

    async readHistoryByGate(req, res) {
        let history = await readHistoryByGate(parseInt(req.params.id));
        res.json({ history: history });
    }

    async deleteGate(req, res) {
        try {
            let gate = await getConnection().createQueryBuilder().delete().from(Gate).where('id =:id', { id: parseInt(req.params.id) }).execute();
            res.json({ gate: gate });
        } catch (e) {
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    }

}

export default GateManager;