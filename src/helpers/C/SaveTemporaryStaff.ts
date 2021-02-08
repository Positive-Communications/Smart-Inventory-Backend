import TemporaryStaff from "../../entity/TemporaryStaff";
import readGateByID from "../R/ByID/ReadGateByID";
import {getConnection} from "typeorm";

export default async function saveTemporaryStaff(data) {

    let temporaryStaff = new TemporaryStaff()

    temporaryStaff.userName = data.userName;
    temporaryStaff.identificationType = data.identificationType;
    temporaryStaff.identificationNumber = data.identificationNumber;
    temporaryStaff.identificationPhoto = data.identificationPhoto;
    temporaryStaff.userPhoto = data.userPhoto;
    temporaryStaff.workDescription = data.workDescription;
    temporaryStaff.isCarrier = data.isCarrier;
    temporaryStaff.phone = data.phone;
    temporaryStaff.mobile = data.mobile;
    temporaryStaff.email = data.email;
    temporaryStaff.expiry = data.expiry;
    temporaryStaff.entryGate = await readGateByID(data.entrygateID)
    temporaryStaff.exitGate = await readGateByID(data.exitgateID)
    temporaryStaff.lunchBreak = data.lunchBreak;
    temporaryStaff.lunchBreakStarts = data.lunchBreakStarts;
    temporaryStaff.workHours = data.workHours;
    temporaryStaff.reportingTimeMorning = data.reportingTimeMorning;
    temporaryStaff.reportingTimeAfternoon = data.reportingTimeAfternoon;

    try {

        return await
            getConnection().manager.save(temporaryStaff);
    } catch (e) {
        console.log(e)
    }
}

let json = {
    userName: "",
    identificationType: "",
    identificationNumber: "",
    identificationPhoto: "",
    userPhoto: "",
    workDescription: "",
    isCarrier: false,
    phone: "",
    mobile: "",
    email: "",
    expiry: "",
    entryGate: "",
    exitGate: "",
    lunchBreak: "",
    lunchBreakStarts: "",
    workHours: "",
    reportingTimeMorning: "",
    reportingTimeAfternoon: "",
}