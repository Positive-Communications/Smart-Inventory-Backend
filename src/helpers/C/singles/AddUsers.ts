import Users from "../../../entity/Users";
import {getConnection} from "typeorm";

const addUsers = async data => {

    let user = new Users();

    await user.createItSelf(data);

    try {

        return await
            getConnection().manager.save(user);

    } catch (e) {
        console.log(e)
    }
}

export default addUsers;

let config = {
    branchID: "",
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