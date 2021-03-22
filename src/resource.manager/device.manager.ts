import saveDevice from "../helpers/C/singles/SaveDevice";
import readAllDevices from "../helpers/R/Many/AllDevices";
import updateDevices from "../helpers/U/ByID/UpdateDevice";

class DeviceManager{

    async registerDevice(req, res){
        const device = await saveDevice(req.params.deviceType);
        res.json({device: device});
    }

    async editDevice(req, res){
        const device = await updateDevices(req.body, req.params.id);
        res.json({device: device});
    }

    async availAllDevices(req, res){
        const devices = await  readAllDevices(req.params.branchID);
        res.json({devices: devices});
    }



}

export default DeviceManager;