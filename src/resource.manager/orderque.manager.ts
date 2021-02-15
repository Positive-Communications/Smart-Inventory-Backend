import saveOrderQue from "../helpers/C/singles/SaveOrderQue";

class OrderQueManager{

    async saveOrderQue(req, res){
        const orderQue = await saveOrderQue(req.body);
        res.json({orderQue: orderQue})
    }
}

export default OrderQueManager;