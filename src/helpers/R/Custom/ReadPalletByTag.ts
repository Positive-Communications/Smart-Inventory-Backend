import { getConnection } from "typeorm";
import Pallet from "../../../entity/Pallet";
import Tags from "../../../entity/Tags";

const readPalletTag = async (tag: Tags) => {

    return await getConnection()
        .createQueryBuilder()
        .select('pallet')
        .from(Pallet, 'pallet')
        .where('pallet.tag.id =:id', { id: tag.id })
        .getOne();

}

export default readPalletTag;