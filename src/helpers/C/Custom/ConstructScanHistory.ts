import Gate from "../../../entity/Gate";
import Pallet from "../../../entity/Pallet";
import readGateByAddress from "../../R/Custom/ReadGateByAddress";
import readPalletTag from "../../R/Custom/ReadPalletByTag";
import readTagByEPC from "../../R/Custom/tagByEpc";
import addHistory from "../singles/AddHistory";

const constructScanHistory = async (data: { timeStamp: string, address: any; tagEPC: string; }) => {


    let gate = await readGateByAddress(data.address);
    let tag = await readTagByEPC(data.tagEPC);

    if (tag.isPalletTag) {

        let _data = {
            timeStamp: data.timeStamp,
            gateID: gate.id,
            palletID: tag.pallet.id,
            palletStatus: tag.pallet.status
        };


        switch (checkPackagingErrors(gate, tag.pallet)) {

            case ("AUTHORISED"):
                _data["hasErrors"] = false;
                // return await addHistory(_data);


            case ("UNAUTHORISED"):
                _data["hasErrors"] = false;
                // return await addHistory(_data);

            default:
                return "404 Unauthorized"


        }


    }
    else {
        return "not pallet"
    }


}

export default constructScanHistory;

let config = { timeStamp: "string", address: "any", tagEPC: "string" }


function checkPackagingErrors(gate: Gate, pallet: Pallet) {

    if (gate.isForPackaging && pallet.status === "empty" || pallet.status === "empty_move" || pallet.status === "no_status") {
        return "AUTHORISED"
    } else
        return "UNAUTHORISED"
}
