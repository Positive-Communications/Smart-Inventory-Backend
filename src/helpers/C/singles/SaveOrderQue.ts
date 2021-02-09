import OrderQue from "../../../entity/OrderQue";
import readBranchByID from "../../R/ByID/ReadBranchByID";
import {getConnection} from "typeorm";

export default async function saveOrderQue(data) {

    let orderQue = new OrderQue();

    orderQue.vehicleCanEnterPremisesWhenRemaining = data.vehicleCanEnterPremisesWhenRemaining;
    orderQue.vehicleWillBePreparedAndRemainOnStandBy = data.vehicleWillBePreparedAndRemainOnStandBy;
    orderQue.branch = await readBranchByID(data.branchID)

    try {

        return await
            getConnection().manager.save(orderQue);

    } catch (e) {
        console.log(e)
    }

}

let config = {
    vehicleCanEnterPremisesWhenRemaining :"",
    vehicleWillBePreparedAndRemainOnStandBy:"",
    branchID: ""
}