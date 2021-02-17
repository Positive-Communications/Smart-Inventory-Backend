import { getConnection } from "typeorm";
import Store from "../../../entity/Store";

const getOrCreateStore = async (data) => {
    console.log(data);
    

    let store;
    try {
        store = await getConnection()
            .createQueryBuilder()
            .select('store')
            .from(Store, 'store')
            .where('store.number =:number', { number: data })
            .getOne();

            console.log(await store);
            

        if (store == null || store == undefined) {
            store = new Store();
            await store.createItself(data);

            return await 
                getConnection().manager.save(store);
        }else{
            return await store;
        }

    }catch(e){
        console.log(e);
        
    }

    // let store = new Store();
    // await store.createItself(data);
}

export default getOrCreateStore;