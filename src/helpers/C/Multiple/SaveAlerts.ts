import { getConnection } from "typeorm";
import Alerts from "../../../entity/Alerts";
import Gate from "../../../entity/Gate";
import Move from "../../../entity/Move";
import Sections from "../../../entity/Sections";
import Tags from "../../../entity/Tags";
import ProductManager from "../../../resource.manager/product.manager";
import readSectionByGate from "../../R/ByID/ReadSectionByGate";
import assignProductToTag from "../../R/Custom/ReadProductByPreset";
import readTagByEPC from "../../R/Custom/tagByEpc";
import updateTagByID from "../../U/ByID/UpdateTagByID";
import addHistory from "../singles/AddHistory";
import saveAlert from "../singles/SaveAlerts";
import saveMoves from "../singles/SaveMove";




const proccessScan = async (tag: Tags, gate: Gate, carrier: any) => {

    const productManager = new ProductManager();


    switch (tag.status) {

        case "empty":
            


            if (gate.isForPackaging && tag.epc.startsWith("product")) {


                let moves = await getConnection().manager.find(Move, { relations: ["tags"] });
                let section = gate.presetMeta.preset.section.id;
                let product = gate.presetMeta.product.id;

                let filtered = moves.filter(move => move.toID === "packaging_1")


                if (filtered.length > 0) {

                    if (filtered[0].tags.map(tag_ => tag_.id).filter(id => id === tag.id).length > 0) {

                        console.log('====================================');
                        console.log("already scanned");
                        console.log('====================================');

                        return await newAlertContainer("packaging_unauthorised", product.toString(), carrier, section, tag);


                    } else {

                        console.log("in_packaging");


                        return await updateTag("in_packaging", tag.id, product, filtered[0].id);
                    }
                }

            }


        case "in_packaging":

            if (gate.isForPackaging && tag.epc.startsWith("product")) {

                let moves = await getConnection().manager.find(Move, { relations: ["tags", "alerts"] });
                let section = gate.presetMeta.preset.section;
                let product = gate.presetMeta.product.id;

                let relevantMoves = moves.filter(move => parseInt(move.product) === product).filter(move => move.alerts.length > 0);

                console.log('====================================');
                console.log(relevantMoves);
                console.log('====================================');

                if (relevantMoves.length > 0) {

                    console.log('====================================');
                    return await createErrorAlert("packaging_unauthorised", relevantMoves[0].id, carrier, tag);

                } else {
                    return await newAlertContainer("packaging_unauthorised", product.toString(), carrier, section.id, tag);
                }


            }

        case "no_status":

        // if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised Storage", "type": "" });
        // else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised storage", type: "recall" });

        case "dispatched":

        // if (gate.isForDispatch && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Empty Pallet Not returned", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For Order Number", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForStorage && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForPackaging && tag.isPalletTag) return await savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised Product", type: "recall" });
        // else if (gate.isForPackaging && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For OrderNumber", severity: "Unauthorised Product", "type": "" });

        case "order_moved_out":

        // if (gate.isForPackaging && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Product is For Dispatch", severity: "Unauthorised", type: "recall" });

        case "defective":

        // if (gate.isForPackaging && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is Not for this packaging section", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForDispatch && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForStorage && tag.isProductTag) return await saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" });

        case "moved_out":

        // if (gate.isForPackaging && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForDispatch && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });
        // else if (gate.isForStorage && tag.isProductTag) return await saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" });

        default:
        // if (tag.isPalletTag || tag.isProductTag)
        // return await saveAlert(tag.epc, gate.id, { reason: "Stored In Store", severity: "Unauthorised", type: "" });

    }


}

export default proccessScan;


const updateTag = async (context, tagID, productID, moveID) => {



    await
        getConnection().createQueryBuilder()
            .update(Tags).set({
                product: productID,
                moves: moveID,
                status: context,
                isAssigned: true
            }).where("id =:id", { id: tagID }).execute();

    return await getConnection().manager.findOne(Tags, tagID);
}

const createErrorAlert = async (context: string, move: number, carrier: any, tag: Tags) => {

    switch (context) {

        case "packaging_unauthorised":

    
            let alert = new Alerts();
            alert.reason = "Product Already Packed."
            alert.type = "unauthorised";
            alert.move = await getConnection().manager.findOne(Move, move);
            alert.type = "recall";
            alert.tag = tag;

            try {

                await getConnection().manager.save(alert);

                return await getConnection().manager.findOne(Move, move, { relations: ["alerts"] })
            } catch (e) {

                return "an erroor occured"
            }
    }

}

const newAlertContainer = async (context: string, product: string, carrier: string, to: number, tag: Tags) => {


    let move = new Move();
    move.toID = `${context}_${to}`;
    move.carrier = carrier;
    move.fromID = "update_later";
    move.product = product;


    try {

        let moved = await getConnection().manager.save(move);

        return await createErrorAlert("packaging_unauthorised", moved.id, carrier, tag)
    }
    catch (e) {
        return "error at new errors";
    }
}