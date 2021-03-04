import saveMultipleTags from "../helpers/C/Multiple/SaveMultipleTags";
import readTagByEPC from "../helpers/R/Custom/tagByEpc";
import readAllUnasignedTags from "../helpers/R/Many/AllUnassignedTags";
import readAllTransactions from "../helpers/R/Many/ReadAllTransactions";

class TagsManager{

    async saveNewTags(req, res){
        res.json(await saveMultipleTags(req.body, req.params.id));
    }


    async getTagByEPC(req, res){
        res.json(await readTagByEPC(req.params.epc));
    }

    async getAllUnasignedTags(req, res){
        res.json({tags: await readAllUnasignedTags()}); 
    }

    async getAllTransactions(req, res){
        res.json({transactions: await readAllTransactions()});
    }



}

export default TagsManager;