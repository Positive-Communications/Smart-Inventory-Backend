import Pallet from "../../../entity/Pallet";
import {getConnection} from "typeorm";

export default async function savePallet(data) {

    let pallet = new Pallet();
    
    await pallet.createItself(data);

    try {

        return await
            getConnection().manager.save(pallet);

    } catch (e) {
        
        console.log(e);
    }

}

let json = {
    unit: {},
    count: "",
    palletType: "",
}