import { getConnection } from "typeorm";
import ProductUnit from "../../../entity/ProductUnit";

const addProductUnit = async (data: any) => {

    const unit = new ProductUnit();
    unit.createItself(data);

    try {

        return await
            getConnection().manager.save(unit)
    } catch (e) {
        console.log(e);

    }

}

export default addProductUnit;
