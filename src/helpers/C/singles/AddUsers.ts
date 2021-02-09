import Users from "../../../entity/Users";
import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";
import {json} from "express";

export default async function addUsers(data) {

    let user = new Users();

    await user.createItself(data);

    try {

        return await
            getConnection().manager.save(user);

    } catch (e) {
        console.log(e)
    }
}

let config = {
    branch: "",
    identificationNumber: "",
    identificationType: "",
    userPicture: "",
    userName: "",
    password: "",
    identificationPhoto: "",
    designation: "",
    isCarrier: "",
    departmentWorkArea: "",
    phone: "",
    mobile: "",
    email: "",
    joined: "",
}