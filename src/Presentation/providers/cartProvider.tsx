import { type ReactNode, useState } from "react"
import type { Cart } from "../../Domain/entities/Cart"
import  { CartContext } from "../context/CartContext"

export default function CartProvider ({children}:{children:ReactNode}){
    const [cart,setCart] = useState<Cart[]>([])
    return(
        <CartContext value={{cart,setCart}}>
        {children}
        </CartContext>
    )
}
