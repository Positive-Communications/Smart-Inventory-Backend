import { getConnection } from "typeorm";
import Tags from "../../../entity/Tags";

const readTagByEPC = async (epc: string) =>{


    return await
        getConnection()
        .createQueryBuilder()
        .select('tag')
        .from(Tags, 'tag')
        .where('tag.epc =:epc', {epc: epc})
        .leftJoinAndSelect('tag.product', 'product')
        .leftJoinAndSelect('tag.pallet', 'pallet')
        .leftJoinAndSelect('tag.carrier', 'carrier')
        .getOne();

}

export default readTagByEPC;