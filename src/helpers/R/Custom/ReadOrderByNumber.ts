import { getConnection } from "typeorm";
import Orders from "../../../entity/Orders";

const readOrderByNumber = async (orderNumber: string ) => {

    return await
        getConnection().createQueryBuilder()
            .select('order').from(Orders, "order")
            .where('order.orderNumber =:number', { number: orderNumber })
            .getOne();
}

export default readOrderByNumber;