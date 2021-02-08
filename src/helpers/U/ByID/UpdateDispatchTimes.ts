import {getConnection} from "typeorm";
import DispatchTimes from "../../../entity/DispatchTimes";

export default async function updateDispatchTimes(data) {

    return await
        getConnection()
            .createQueryBuilder()
            .update(DispatchTimes)
            .set({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: false,
                saturday: false,
                sunday: false,
                startTime: data.startTime,
                endTime: data.endTime,
                saturdayStart: data.saturdayStart,
                saturdayEnd: data.saturdayEnd,
                sundayStart: data.sundayStart,
                sundayEnd: data.sundayEnd,
            })
            .where('id =:id', {id: parseInt(data.id)})
            .execute();

}

let config = {
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