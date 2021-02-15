import * as bcrypt from "bcryptjs";


const superUserGenerator = () => {

    return {
        branchID: "1",
        identificationNumber: "000000",
        identificationType: "National ID",
        userPicture: "..../",
        identificationPhoto: "../",
        password: "pass",
        designation: "../",
        isCarrier: "../",
        departmentWorkArea: "../",
        phone: "../",
        mobile: ".../",
        email: "../",
        joined: "../",
        privileges: {
            isAdmin: true,
            "addOrEditUsers": false,
            "canViewOrderAmount": false,
            "issueEditCollectionReplacementOrder": false,
            "loadCollectionOrder": false,
            "loadPartialProductQuantity": false,
            "setGateDeviceSettings": false,
            "setProductTags": false,
            "setCarrierSettings": false,
            "setStorageBays": false,
            "setOrderQueSettings": false,
            "setAccessSettings": false,
            "scanAccessCard": false,
            "packagingAndStorageAlerts": false,
            "orderDispatchAlerts": false
        }
    }
}

const pass = () =>{
    return bcrypt.hashSync(String(Math.random() * 100), 3);
}

export default superUserGenerator;