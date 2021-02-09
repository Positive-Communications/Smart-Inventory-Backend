import Users from "../../../entity/Users";
import {getConnection} from "typeorm";
import Branch from "../../../entity/Branch";
import {json} from "express";
import saveUserPrivileges from "./SaveUserPrivileges";

export default async function addUsers(data) {

    let user = new Users();

    await user.createItself(data);
    user.privileges = await saveUserPrivileges(data.privileges);

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
    privileges: {
        isAdmin: false,
        addOrEditUsers: false,
        canViewOrderAmount: false,
        issueEditCollectionReplacementOrder: false,
        loadCollectionOrder: false,
        loadPartialProductQuantity: false,
        setGateDeviceSettings: false,
        setProductTags: false,
        setCarrierSettings: false,
        setStorageBays: false,
        setOrderQueSettings: false,
        setAccessSettings: false,
        scanAccessCard: false,
        packagingAndStorageAlerts: false,
        orderDispatchAlerts: false,
    }
}