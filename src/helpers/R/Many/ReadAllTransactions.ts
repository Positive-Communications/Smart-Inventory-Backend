import { getConnection } from "typeorm";
import Transaction from "../../../entity/Transaction";

const readAllTransactions = async () => {

    return await getConnection().manager.find(Transaction);

}

export default readAllTransactions;