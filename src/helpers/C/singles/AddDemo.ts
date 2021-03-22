import { getConnection } from "typeorm"
import Demo from "../../../entity/Demo";

const addDemo = async(data)=>{

    let demo = new Demo();

    await demo.createItself(data);

    try{
        return await
             getConnection().manager.save(demo);
    }catch(e){
        console.log(e)
    }
}

export default addDemo;