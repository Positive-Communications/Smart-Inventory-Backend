import Orders from "../../../entity/Orders";
import {getConnection} from "typeorm";

export default async function saveOrder(data: {orderNumber: string; date: string; customerName: string; typeOfClient: string; customerEmail: string; customerPhone: string; isBranchDeportOrder: boolean; collectionBy: string; identificationType: string; identificationNumber: string; vehicleReg: string; issuedBy: any; collectionFrom: any; checkedBy: string; orderDetails: any; }) {

    let order = new Orders();

    await order.createItself(data)

    if (await order.isLegit())
        try {
            return await
                getConnection().manager.save(order);
        } catch (e) {
            console.log(e)
        }
}

