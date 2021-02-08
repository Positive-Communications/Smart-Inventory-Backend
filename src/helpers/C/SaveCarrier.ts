import Carrier from "../../entity/Carrier";
import {getConnection} from "typeorm";
import CarrierType from "../../entity/CarrierType";
import Users from "../../entity/Users";

export default async function saveCarrier(data) {
    let type = await getConnection()
        .createQueryBuilder()
        .select('type')
        .from(CarrierType, 'type')
        .where('type.id =:id', {id: parseInt(data.type)})
        .getOne();

    let user = await getConnection()
        .createQueryBuilder()
        .select('user')
        .from(Users, 'user')
        .where('user.id =:id', {id: parseInt(data.user)})
        .getOne()

    let carrier = new Carrier()
    carrier.No = data.number;
    carrier.type = type;
    carrier.user = user;
    carrier.isFixedUse = data.isFixed;
    carrier.status = data.status;
    try {
        return await
            getConnection().manager.save(carrier);
    } catch (e) {
        console.log(e)
    }
}

let json = {
    No: "",
    type: "", //typeID,
    user: "", //userID,
    isFixedUse: true,
    status: ""
}