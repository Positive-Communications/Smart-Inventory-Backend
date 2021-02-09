import ScanProductHistory from "../../../entity/ScanProductHistory";
import readGateByID from "../../R/ByID/ReadGateByID";
import readDeviceByID from "../../R/ByID/ReadDeviceByID";
import readProductByID from "../../R/ByID/ReadProductByID";
import {getConnection} from "typeorm";

export default async function saveScanProductHistory(data) {

    let context;

    switch (data.context) {
        case "gate":
            context = readGateByID(data.contextID);
        case "device":
            context = readDeviceByID(data.contextID);
        default:
            context = null;

    }

    let scanHistory = new ScanProductHistory();

    scanHistory.timeStamp = data.timeStamp;
    scanHistory.isReadByHandHeld = data.isReadByHandHeld;
    data.context === "gate" ?
        scanHistory.gate = await context
        : data.context === "device" ?
        scanHistory.device = await context
        : null;
    scanHistory.product = await readProductByID(data.productID);

    try {

        return await
            getConnection().manager.save(scanHistory);

    } catch (e) {
        console.log(e)
    }
}

let json = {
    context: "",
    contextID: "",
    timeStamp: "",
    isReadByHandHeld: "",
    productId: ""
}