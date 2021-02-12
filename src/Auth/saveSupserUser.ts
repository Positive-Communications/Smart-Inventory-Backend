import Users from "../entity/Users";
import {getConnection} from "typeorm";

const saveSuperUser = async (req, res) => {

    let data = {
        "branchID": "1",
        "identificationNumber": "7979",
        "identificationType": "0000",
        "userPicture": "..../",
        "userName": "admin1",
        "password": "testpass123",
        "identificationPhoto": "../",
        "designation": "../",
        "isCarrier": "../",
        "departmentWorkArea": "../",
        "phone": "../",
        "mobile": ".../",
        "email": "../",
        "joined": "../",
        "privileges": {
            "isAdmin": true,
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

    let superUser = new Users();
    await superUser.createItSelf(data);
    superUser.userName = superUser.userName + superUser.id;

    console.log(superUser);

    try {
        let user = await getConnection().manager.save(superUser);
        res.json({
            username: user.userName,
            password: data.password
        })
    } catch (e) {
        res.json({failed: '...'})
        console.log(e);
    }
}

export default saveSuperUser;