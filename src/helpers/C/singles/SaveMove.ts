import { getConnection } from "typeorm";
import Move from "../../../entity/Move";

const saveMoves = async (data) => {

    let move = new Move();
    await move.createItself(data)


    try {
        return await getConnection().manager.save(move)
    } catch (e) {
        console.log(e);
        
     }

}
export default saveMoves;