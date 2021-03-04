import { getConnection } from "typeorm";
import OrderQue from "../../../entity/OrderQue";

const readOrderQue = async (id: string) => {

    return (await getConnection().manager.find(OrderQue, { relations: ["branch"] }))
        .filter(que => que.branch.id === parseInt(id))[0];

}

export default readOrderQue;