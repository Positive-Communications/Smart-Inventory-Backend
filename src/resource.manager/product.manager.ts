import saveProductUnit from "../entity/SaveProductUnit";
import addManualEntry from "../helpers/C/singles/AddManualEntry";
import saveProduct from "../helpers/C/singles/AddProduct";
import addUnit from "../helpers/C/singles/AddUnit";
import savePallet from "../helpers/C/singles/SavePallet";
import readAllProducts from "../helpers/R/Many/AllProducts";
import readAllProductUnits from "../helpers/R/Many/ReadAllProductUnit";

class ProductManager {

    async saveProduct(req, res){
        const product = await saveProduct(req.body);
        res.json({product:product});
    }

    async getAllProducts(req, res){
        const products = await readAllProducts();
        res.json({products: products});
    }

    async saveProductUnit(req, res){
        const unit = await saveProductUnit(req.body);
        res.json({unit: unit});
    }

    async getAllUnits(req, res){
        const units = await readAllProductUnits();
        res.json({units: units});
    }

    async saveUnit(req, res){
        const unit = await addUnit(req.body);
        res.json({unit: unit});
    }

    async addPallet(req, res){
        const pallet = await savePallet(req.body);
        res.json({pallet: pallet});
    }

    async saveManualEntry(req, res){
        const manualEntry =  await addManualEntry(req.body)
    }
}

export default ProductManager;