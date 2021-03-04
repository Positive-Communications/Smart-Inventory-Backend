import { getConnection } from "typeorm";
import Alerts from "../entity/Alerts";
import saveProductUnit from "../entity/SaveProductUnit";
import constructScanHistory from "../helpers/C/Custom/ConstructScanHistory";
import proccessScan from "../helpers/C/Multiple/SaveAlerts";
import addHistory from "../helpers/C/singles/AddHistory";
import addManualEntry from "../helpers/C/singles/AddManualEntry";
import saveProduct from "../helpers/C/singles/AddProduct";
import addUnit from "../helpers/C/singles/AddUnit";
import savePallet from "../helpers/C/singles/SavePallet";
import readGateByID from "../helpers/R/ByID/ReadGateByID";
import getProductsBySection from "../helpers/R/Custom/ReadHistoryBySection";
import readTagByEPC from "../helpers/R/Custom/tagByEpc";
import readAllProducts from "../helpers/R/Many/AllProducts";
import readAllProductUnits from "../helpers/R/Many/ReadAllProductUnit";

class ProductManager {

    async saveProduct(req, res) {
        const product = await saveProduct(req.body);
        res.json({ product: product });
    }

    async getAllProducts(req, res) {
        const products = await readAllProducts();
        res.json({ products: products });
    }

    async saveProductUnit(req, res) {
        const unit = await saveProductUnit(req.body);
        res.json({ unit: unit });
    }

    async getAllUnits(req, res) {
        const units = await readAllProductUnits();
        res.json({ units: units });
    }

    async saveUnit(req, res) {
        const unit = await addUnit(req.body);
        res.json({ unit: unit });
    }

    async addPallet(req, res) {
        const pallet = await savePallet(req.body);
        res.json({ pallet: pallet });
    }

    async saveManualEntry(req, res) {
        const manualEntry = await addManualEntry(req.body);
        res.json({ manualEntry: manualEntry });
    }

    async saveProductHistory(req, res) {
        const history = await constructScanHistory(req.body);
        res.json({ history: history });
    }

    async saveAlert(data: { reason: string; severity: string; type: string; }, tag: string) {
        const alert = new Alerts();
        await alert.createItself(data, tag)
        try {
            return  await
                getConnection().manager.save(alert)

        } catch (err) { 
            console.log(err);
            
        }

    }

    async getProductsBySection(req, res) {
        const products = await getProductsBySection(req.params.id);
        res.json({ products: products });
    }


    async proccessScan(req, res) {
        let tag = await readTagByEPC(req.body.epc);
        let gate = await readGateByID(req.body.gateID);
        let diagnosis = await proccessScan(tag, gate, req.body.carrier);
        res.json({ history: diagnosis })
    }

}

export default ProductManager;