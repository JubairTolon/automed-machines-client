import { useEffect, useState } from "react"
import { getStoredCart } from "../Utlities/SetToLocalStorage";

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products?.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products]);

    //cart calculation
    let subTotal = 0;
    let shippingCost = 0;
    let total = 0;
    let quantity = 0;

    cart?.map(product => {
        quantity = quantity + product.minOrder;
        subTotal = subTotal + (product.price * product.minOrder);
        shippingCost = shippingCost + product.shipping;
        total = subTotal + shippingCost;
        return [subTotal, shippingCost, total, quantity];
    })

    return [cart, setCart, subTotal, total, quantity];
}

export default useCart;