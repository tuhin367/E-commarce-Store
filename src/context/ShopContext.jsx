import { createContext, useState } from "react";
import { products } from "../assets/assets.js";


export const ShopContext = createContext();

export const ShopContextProvider = (props) =>{

    const currancy ='$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowsearch]= useState(false);

const value ={
    products,currancy, delivery_fee,
    search,setSearch,showSearch,setShowsearch
}

return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)


}