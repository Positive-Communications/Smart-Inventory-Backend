import saveCarrier from "../helpers/C/singles/SaveCarrier";
import saveCarrierTypes from "../helpers/C/singles/SaveCarrierTypes";
import getAllCarrierTypes from "../helpers/R/Many/CarrierTypes";
import getAllCarriers from "../helpers/R/Many/GetAllCarriers";

class CarrierManager{

    async registerCarrier(req, res){
        const carrier = saveCarrier(req.body);
        res.json({carrier: carrier});
    }

    async saveCarrierType(req, res){
        const type = await saveCarrierTypes(req.body)
        res.json({carrierType: type });
    }

    async getAllCarrierTypes(req, res){
        const types = await getAllCarrierTypes()
        res.json({carrierTypes: types});
    }

    async summonAllCarrierTypes(req, res){
        const carriers = await getAllCarriers();
        res.json({ carriers: carriers});
    }

}

export default CarrierManager;