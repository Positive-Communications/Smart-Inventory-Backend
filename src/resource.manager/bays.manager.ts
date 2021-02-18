import { resolveModuleName } from "typescript";
import saveBays from "../helpers/C/singles/SaveBays";
import readAllStores from "../helpers/R/Many/ReadAllStores";

class StorageBayManager{
    
    async createBays(req, res){
        const bays = await saveBays(req.body);
        res.json({bays: bays});
    }

    async getAllStores(req, res){
        const stores =  await readAllStores();
        res.json({stores: stores});
    }
}

export default StorageBayManager;