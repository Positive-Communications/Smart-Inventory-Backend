import UserPrivileges from "../../../entity/UserPrivileges";
import {getConnection} from "typeorm";

export default async function saveUserPrivileges(data) {

    let userPrivilege = new UserPrivileges();
    await userPrivilege.createItself(data)

    try{
        return await getConnection()
            .manager.save(userPrivilege);
    }catch (e){
        console.log(e)
    }

}

let config = {
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