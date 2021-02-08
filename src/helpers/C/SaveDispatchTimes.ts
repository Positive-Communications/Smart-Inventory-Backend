import {getConnection} from "typeorm";
import readBranchByID from "../R/ByID/ReadBranchByID";
import DispatchTimes from "../../entity/DispatchTimes";

export default async function saveDispatchTimes(data) {

    let dispatchTimes = new DispatchTimes();

    dispatchTimes.monday = data.monday;
    dispatchTimes.tuesday = data.tuesday;
    dispatchTimes.wednesday = data.wednesday;
    dispatchTimes.thursday = data.thursday;
    dispatchTimes.friday = data.friday;
    dispatchTimes.saturday = data.saturday;
    dispatchTimes.sunday = data.sunday;
    dispatchTimes.startTime = data.startTime;
    dispatchTimes.endTime = data.endTime;
    dispatchTimes.saturdayStart = data.saturdayStart;
    dispatchTimes.saturdayEnd = data.saturdayEnd;
    dispatchTimes.sundayStart = data.sundayStart;
    dispatchTimes.sundayEnd = data.sundayEnd;
    dispatchTimes.branch = await readBranchByID(data.branchID);

    try {

        return await
            getConnection().manager.save(dispatchTimes);
    } catch (e) {
        console.log(e);
    }
}

let json = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    startTime: "",
    endTime: "",
    saturdayStart: "",
    saturdayEnd: "",
    sundayStart: "",
    sundayEnd: "",
    branchID: "",
}