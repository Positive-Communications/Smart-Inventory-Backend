import AccessCard from "../../../entity/AccessCard";
import readBranchByID from "../../R/ByID/ReadBranchByID";
import {getConnection} from "typeorm";

export default async function saveAccessCards(data) {

    let accessCard = new AccessCard();

    accessCard.tagType = data.tagType;
    accessCard.userName = data.userName;
    accessCard.identificationType = data.identificationType;
    accessCard.identificationNumber = data.identificationNumber;
    accessCard.uploadIdentification = data.uploadIdentification;
    accessCard.userImage = data.userImage;
    accessCard.workDesc = data.workDesc;
    accessCard.branch = await readBranchByID(data.branchID);

    try {

        return await
            getConnection().manager.save(accessCard)

    } catch (e) {
        console.log(e)
    }
}

let config = {
    tagType: "",
    userName: "",
    identificationType: "",
    identificationNumber: "",
    uploadIdentification: "",
    userImage: "",
    workDesc: "",
    branchID: ""
}