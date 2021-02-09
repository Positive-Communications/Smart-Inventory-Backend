import OrderDetails from "../../../entity/OrderDetails";
import {getConnection} from "typeorm";

export default async function saveOrderDetails(data) {

    let orderDetails = new OrderDetails();

    await orderDetails.createItself(data);

    if (await orderDetails.isLegit())
        try {
            return await
                getConnection().manager.save(orderDetails);
        } catch (e) {
            console.log(e)
        }
}

let config={
    productID: "",
    quantity: "",
    unitID: ""
}