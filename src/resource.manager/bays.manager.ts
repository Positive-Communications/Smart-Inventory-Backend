import { resolveModuleName } from "typescript";
import saveBays from "../helpers/C/singles/SaveBays";
import readAllStores from "../helpers/R/Many/ReadAllStores";

class StorageBayManager{
    
    async createBays(req, res){
        const bay = await saveBays(req.body);
        res.json({bay: bay});
    }

    async getAllStores(req, res){
        const stores =  await readAllStores();
        res.json({stores: stores});
    }
}

export default StorageBayManager;