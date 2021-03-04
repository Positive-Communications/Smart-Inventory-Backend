import Gate from "../../../entity/Gate";
import Tags from "../../../entity/Tags";
import ProductManager from "../../../resource.manager/product.manager";
import assignProductToTag from "../../R/Custom/ReadProductByPreset";
import updateTagByID from "../../U/ByID/UpdateTagByID";
import addHistory from "../singles/AddHistory";




const proccessScan = async (tag: Tags, gate: Gate, carrier: any) => {

    const productManager = new ProductManager();


    switch (tag.status) {

        case "empty":

            if (gate.isForPackaging && tag.epc.startsWith("product")) {
                let entry = addHistory({ gateID: gate.id, tagEpc: tag.epc, status: "packed" , carrier : parseInt(carrier)});
                return await entry;
            }


        case "no_status":

            if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised Storage", "type": "" });
            else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised storage", type: "recall" });

        case "dispatched":

            if (gate.isForDispatch && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" });
            else if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Empty Pallet Not returned", severity: "Unauthorised", type: "recall" });
            else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For Order Number", severity: "Unauthorised", type: "recall" });
            else if (gate.isForStorage && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" });
            else if (gate.isForPackaging && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised Product", type: "recall" });
            else if (gate.isForPackaging && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For OrderNumber", severity: "Unauthorised Product", "type": "" });

        case "order_moved_out":

            if (gate.isForPackaging && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product is For Dispatch", severity: "Unauthorised", type: "recall" });

        case "packed":


            if (gate.isForPackaging && tag.epc.startsWith("product")) {
                
                let product =  await productManager.saveAlert({
                    reason: "Product already Packed",
                    severity: "Unauthorised Item",
                    type: "error"
                }, tag.epc)

                return  product;
            }else{
            }

        case "defective":

            if (gate.isForPackaging && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is Not for this packaging section", severity: "Unauthorised", type: "recall" });
            else if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" });
            else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" });

        case "moved_out":

            if (gate.isForPackaging && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });
            else if (gate.isForDispatch && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });
            else if (gate.isForStorage && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });

        default:
            if (tag.isPalletTag || tag.isProductTag)
                return await saveAlert(tag.epc, gate.id, { reason: "Stored In Store", severity: "Unauthorised", type: "" });

    }


}

export default proccessScan;


async function saveProductAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();

    // let history = await addHistory({ gateID: gateID, tagEpc: epc, status: "" });
    // let alert_ = productManager.saveAlert(alert, s.epc);
}

async function saveProductDoesNotBelongAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();

    // let history = await addHistory({ gateID: gateID, tagEpc: epc, status: ""  1});
    // return await productManager.saveAlert(alert, history.id)

}

async function savePalletAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();
    // let history = await addHistory({ gateID: gateID, tagEpc: epc, status: "" , 1});
    // return await productManager.saveAlert(alert, history.id)

}


async function saveAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    // const productManager = new ProductManager();
    // return await productManager.saveAlert(alert, history.id)

}