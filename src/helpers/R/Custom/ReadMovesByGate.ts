import { getConnection } from "typeorm";
import Move from "../../../entity/Move";

const readMovesByGate = async (data) => {


    const moves = await getConnection().manager.find(Move);

    return moves.filter(move => move.toID === data);
}

export default readMovesByGate;