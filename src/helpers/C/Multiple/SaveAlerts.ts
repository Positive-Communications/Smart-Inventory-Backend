import Gate from "../../../entity/Gate";
import Tags from "../../../entity/Tags";
import ProductManager from "../../../resource.manager/product.manager";
import addHistory from "../singles/AddHistory";


const proccessScan = async (tag: Tags, gate: Gate) => {

    switch (tag.status) {

        case "empty":

            if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Not Packed", severity: "Unauthorised storage", type: "recall" });

            else if (gate.isForStorage)
                if (tag.isPalletTag && !gate.allowEmptyPallets) return await savePalletAlert(tag.epc, gate.id, { reason: "Removal Of Empty Pallets Denied", severity: "Unauthorized removal", type: "recall" });
                else if (tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Not Packed", severity: "Unauthorised Removal", type: "recall" });

            const productManager = new ProductManager();
            return await addHistory({gateID: gate.id, tagEpc: tag.epc})


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

            if (gate.isForPackaging && tag.isProductTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Product already packed", severity: "Unauthorised", type: "recall" });

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

    let history = await addHistory({ gateID: gateID, tagEpc: epc });
    let alert_ = productManager.saveAlert(alert, history.id);
}

async function saveProductDoesNotBelongAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();

    let history = await addHistory({ gateID: gateID, tagEpc: epc });
    return await productManager.saveAlert(alert, history.id)

}

async function savePalletAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();
    let history = await addHistory({ gateID: gateID, tagEpc: epc });
    return await productManager.saveAlert(alert, history.id)

}


async function saveAlert(epc: string, gateID: number, alert: { reason: string; severity: string; type: string; }) {
    const productManager = new ProductManager();

    let history = await addHistory({ gateID: gateID, tagEpc: epc });
    return await productManager.saveAlert(alert, history.id)

}