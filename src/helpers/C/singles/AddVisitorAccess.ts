import VisitorAccessTags from "../../../entity/VisitorAccessTags";
import {getConnection} from "typeorm";

export default async function addVisitorAccess(data) {

    let visitorAccess = new VisitorAccessTags();

    await visitorAccess.createItSelf(data);

    try {

        return await
            getConnection().manager.save(visitorAccess);

    } catch (e) {
        console.log(e);
    }


}


let config = {
    tagType: "",
    userName: "",
    identificationType: "",
    identificationNumber: "",
    identificationImage: "",
    visitorsCompany: "",
    designation: "",
    phone: "",
    mobile: "",
    email: "",
    expiry: "",
    entryGate: "",
    exitGate: "",
    branch: "",
    accessGates: "",
}