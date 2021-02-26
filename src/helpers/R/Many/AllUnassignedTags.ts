import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";

const readAllUnasignedTags =  async()=>{

    try{

        return await 
            getConnection()
            .createQueryBuilder()
            .select('tags')
            .from(Tags, 'tags')
            .where('tags.isAssigned =:isAssigned', {isAssigned: false})
            .getMany();
    }
    catch (error){
        console.log(error);
    }
}

export default readAllUnasignedTags;