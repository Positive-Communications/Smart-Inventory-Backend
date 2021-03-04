import { getConnection } from "typeorm";
import OrderQue from "../../../entity/OrderQue";
import readBranchByID from "../../R/ByID/ReadBranchByID";

const createOrderQue = async (data: { remainingTime: number; standbyTime: number; branchID: any; }) => {

    let orderQue = new OrderQue();

    orderQue.vehicleCanEnterPremisesWhenRemaining = data.remainingTime;
    orderQue.vehicleWillBePreparedAndRemainOnStandBy = data.standbyTime;
    orderQue.branch = await readBranchByID(data.branchID);

    try {

        return await
            getConnection().manager.save(orderQue);

    } catch (e) {
    }

}

export default createOrderQue;
