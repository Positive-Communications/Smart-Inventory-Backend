import {getConnection} from "typeorm";
import UserPrivileges from "../../../entity/UserPrivileges";

export default async function updateUserPrivileges(data) {

    return await
        getConnection()
            .createQueryBuilder()
            .update(UserPrivileges)
            .where('priv.id', {id: parseInt(data.id)})
            .set({
                isAdmin: data.isAdmin,
                addOrEditUsers: data.addOrEditUsers,
                canViewOrderAmount: data.canViewOrderAmount,
                issueEditCollectionReplacementOrder: data.issueEditCollectionReplacementOrder,
                loadCollectionOrder: data.loadCollectionOrder,
                loadPartialProductQuantity: data.loadPartialProductQuantity,
                setGateDeviceSettings: data.setGateDeviceSettings,
                setProductTags: data.setProductTags,
                setCarrierSettings: data.setCarrierSettings,
                setStorageBays: data.setStorageBays,
                setOrderQueSettings: data.setOrderQueSettings,
                setAccessSettings: data.setAccessSettings,
                scanAccessCard: data.scanAccessCard,
                packagingAndStorageAlerts: data.packagingAndStorageAlert,
                orderDispatchAlerts: data.orderDispatchAlerts
            })
            .execute();
}


let json = {
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
    orderDispatchAlerts: false
}