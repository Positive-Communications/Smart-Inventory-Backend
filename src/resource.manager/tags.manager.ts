import saveMultipleTags from "../helpers/C/Multiple/SaveMultipleTags";
import readTagByEPC from "../helpers/R/Custom/tagByEpc";
import readAllUnasignedTags from "../helpers/R/Many/AllUnassignedTags";

class TagsManager{

    async saveNewTags(req, res){
        res.json(await saveMultipleTags(req.body));
    }


    async getTagByEPC(req, res){
        res.json(await readTagByEPC(req.params.epc));
    }

    async getAllUnasignedTags(req, res){
        res.json({tags: await readAllUnasignedTags()}); 
    }


}

export default TagsManager;