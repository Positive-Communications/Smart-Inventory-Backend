import saveBays from "../helpers/C/singles/SaveBays";

class StorageBayManager{
    
    async createBays(req, res){
        const bays = saveBays(req.body);
        res.json({bays: bays});
    }
}

export default StorageBayManager;