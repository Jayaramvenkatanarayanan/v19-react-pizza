import { createContext} from "react";
import type { Cart } from "../../Domain/entities/Cart";
interface CartProps{
    cart:Cart[];
    setCart:React.Dispatch<React.SetStateAction<Cart[]>>;
}

export const CartContext = createContext<CartProps | undefined>(undefined);




