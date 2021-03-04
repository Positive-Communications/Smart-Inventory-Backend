import saveOrderDetails from "../singles/SaveOrderDetails";

export default async function saveMultipleOrderDetails(orderDetailsArray) {

    let orderDetails = [];

    for (const orderDetail of orderDetailsArray) {
        orderDetails.push(await saveOrderDetails(orderDetail));
    }

    return orderDetails;

}

let configArray = [
    {
        productID: "",
        quantity: "",
        unitID: ""
    }
]

