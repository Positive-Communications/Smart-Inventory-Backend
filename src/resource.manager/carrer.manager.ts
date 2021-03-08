import { getConnection } from "typeorm";
import Move from "../entity/Move";
import saveCarrier from "../helpers/C/singles/SaveCarrier";
import saveCarrierTypes from "../helpers/C/singles/SaveCarrierTypes";
import saveMoves from "../helpers/C/singles/SaveMove";
import readMovesByGate from "../helpers/R/Custom/ReadMovesByGate";
import getAllCarrierTypes from "../helpers/R/Many/CarrierTypes";
import getAllCarriers from "../helpers/R/Many/GetAllCarriers";

class CarrierManager {

    async registerCarrier(req, res) {
        const carrier = await saveCarrier(req.body);
        res.json({ carrier: carrier });
    }

    async saveCarrierType(req, res) {
        const type = await saveCarrierTypes(req.body)
        res.json({ carrierType: type });
    }

    async getAllCarrierTypes(req, res) {
        const types = await getAllCarrierTypes()
        res.json({ carrierTypes: types });
    }

    async summonAllCarrierTypes(req, res) {
        const carriers = await getAllCarriers();
        res.json({ carriers: carriers });
    }

    async moveProducts(req, res) {
        const move = await saveMoves(req.body)
        res.json({ move: move })
    }

    async getAllMoves(req, res) {
        res.json({ moves: await getConnection().manager.find(Move, {relations: ["alerts", "tags"]}) });
    }

    async getMovesByGateTo(req, res) {
        res.json({ moves: await readMovesByGate(req.params.id) })
    }

}

export default CarrierManager;