import customMultipleGatees from "../../R/Many/CustomMultipleGates";
import readAllGates from "../../R/Many/ReadAllGates";

const assignGateToProduct = async (gateArray) => {

    let constructed = [];

    if (gateArray[0] === '*') constructed = await readAllGates();
    else {
        let IDs = Object.keys(gateArray[0]);
        constructed = await customMultipleGatees(IDs);
    }
    console.log(constructed);
    
    return constructed;
}

export default assignGateToProduct;
