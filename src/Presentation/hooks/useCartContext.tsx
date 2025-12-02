import { useContext} from "react";
import { CartContext } from "../context/CartContext";

export default function useCartContext()  {
    const cartItems = useContext(CartContext)
    if(cartItems === undefined){
        throw ("cart not added from order component")
    }
    return cartItems
};
