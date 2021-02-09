import Product from "../../../entity/Product";
import readGateByID from "../../R/ByID/ReadGateByID";
import readProductUnitByID from "../../R/ByID/ReadProductUnitByID";

export default async function saveProduct(data) {

    let product = new Product();

    product.name = data.name;
    product.status = data.status;
    product.description = data.description;
    product.expiry = data.expiry;
    product.monthsLeftToExpire = data.monthsLeftToExpire;
    product.unit = await readProductUnitByID(data.unitID)
    product.isStoredOnPallet = data.isStoredOnPallet;
    product.palletIsTrackedByRFID = data.palletIsTrackedByRFID;
    product.dispatchGate = await readGateByID(data.gateID)
}

let json = {
    name: "",
    description: "",
    expiry: "",
    monthsLeftToExpire: "",
    isStoredOnPallet: false,
    palletIsTrackedByRFID: "",
    unitID: "",
    status: "empty"
}