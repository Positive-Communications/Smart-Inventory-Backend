import savePallet from "../singles/SavePallet";

const saveMultiplePallets = async (palletsArray) => {

    let pallets = [];

    for (let pallet of palletsArray) {
        let _pallet = await savePallet(pallet);
        pallets.push(_pallet);
    }


    return await pallets;


};

export default saveMultiplePallets;


const config = [
    {
        unit: {},
        count: "",
        palletType: "",
    }
]