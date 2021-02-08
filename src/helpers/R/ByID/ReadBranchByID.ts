import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function readBranchByID(id){
    try{
        return await
            getConnection()
                .createQueryBuilder()
                .select('branch')
                .from(Branch, 'branch')
                .where('branch.id =:id', {id:parseInt(id)})
                .getOne();
    }catch (e){
        console.log(e)
    }

}