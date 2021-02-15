import { getConnection } from "typeorm";
import Unit from "../../../entity/Units";

const addUnit = async (data) => {

    let unit = new Unit();
    await unit.createItself(data);

    try{
        return await
        getConnection().manager.save(unit);
    }catch(e){
        console.log(e);   
    }
   


}

export default addUnit;


const config = {
    name: ""
}