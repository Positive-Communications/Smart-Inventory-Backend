import {getConnection} from "typeorm";
import DispatchTimes from "../../../entity/DispatchTimes";

async function getDispatchByBranch(branchID) {


    return await
        (await getConnection().manager.find(DispatchTimes, {relations: ['branch']}));
}

export default getDispatchByBranch;