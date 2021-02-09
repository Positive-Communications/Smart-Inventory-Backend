import UserPrivileges from "../../../entity/UserPrivileges";
import {getConnection} from "typeorm";
import Users from "../../../entity/Users";
import readUserByID from "../../R/ByID/ReadUserByID";

export default async function saveUserPrivileges(userId, user) {

    let userPrivilege = new UserPrivileges();

    userPrivilege.user = await readUserByID(userId);
    userPrivilege.isAdmin = user.isAdmin;
    userPrivilege.addOrEditUsers = user.addOrEditUsers;
    userPrivilege.canViewOrderAmount = user.canViewOrderAmount;
    userPrivilege.issueEditCollectionReplacementOrder = user.issueEditCollectionReplacementOrder;
    userPrivilege.loadCollectionOrder = user.loadCollectionOrder;
    userPrivilege.loadPartialProductQuantity = user.loadPartialProductQuantity;
    userPrivilege.setGateDeviceSettings = user.setGateDeviceSettings;
    userPrivilege.setProductTags = user.setProductTags;
    userPrivilege.setCarrierSettings = user.setCarrierSettings;
    userPrivilege.setStorageBays = user.setStorageBays;
    userPrivilege.setOrderQueSettings = user.setOrderQueSettings
    userPrivilege.setAccessSettings = user.setAccessSettings;
    userPrivilege.scanAccessCard = user.scanAccessCard;
    userPrivilege.packagingAndStorageAlerts = user.packagingAndStorageAlerts;
    userPrivilege.orderDispatchAlerts = true;

    try{
        return await getConnection()
            .manager.save(userPrivilege);
    }catch (e){
        console.log(e)
    }

}