import {getConnection} from "typeorm";
import Users from "../../../entity/Users";

export default async function updateUser(data) {

    return await
        getConnection()
            .createQueryBuilder()
            .update(Users)
            .where('user.id =:id', {id: parseInt(data.id)})
            .set({
                userPicture: data.userPicture,
                userName: data.userName,
                identificationType: data.identificationType,
                identificationPhoto: data.identificationPhoto,
                designation: data.designation,
                isCarrier: data.isCarrier,
                departmentWorkArea: data.departmentWorkArea,
                phone: data.phone,
                email: data.email,
                joined: data.joined,
            })
            .execute();
}

let config = {
    userPicture: "",
    userName: "",
    identificationType: "",
    identificationPhoto: "",
    designation: "",
    isCarrier: false,
    departmentWorkArea: "",
    phone: "",
    email: "",
    joined: ""
}