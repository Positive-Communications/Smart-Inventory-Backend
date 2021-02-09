import Orders from "../../../entity/Orders";
import {getConnection} from "typeorm";
import {callbackify} from "util";

export default async function saveOrder(data) {

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