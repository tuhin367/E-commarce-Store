import { createContext } from "react";
import { products } from "../assets/assets.js";


export const ShopContext = createContext();

export const ShopContextProvider = (props) =>{

    const currancy ='$';
    const delivery_fee = 10;

const value ={
    products,currancy, delivery_fee
}

return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)


}