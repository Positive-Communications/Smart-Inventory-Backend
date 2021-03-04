import { getConnection } from "typeorm";
import Orders from "../../../entity/Orders";

const readAllOrders = async () => {


    return await
        getConnection().manager.find(Orders, { relations: ["orderDetails", "issuedBy", "collectionFrom", "orderDetails.product"] })

}

export default readAllOrders;