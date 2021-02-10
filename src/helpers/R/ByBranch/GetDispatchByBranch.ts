import {getConnection} from "typeorm";
import DispatchTimes from "../../../entity/DispatchTimes";

async function getDispatchByBranch(branchID) {

    return await
        getConnection()
            .createQueryBuilder()
            .select('dispatch')
            .from(DispatchTimes, 'dispatch')
            .where('dispatch.branch.id =:id', {id: parseInt(branchID)})
            .getOne();
}

export default getDispatchByBranch;