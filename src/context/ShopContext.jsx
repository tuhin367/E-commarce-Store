import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

export const ShopContextProvider = (props) =>{

    const currancy ='$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch, setShowsearch]= useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size) =>{
        
        if (!size) {
            toast.error('Please select a size');    
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
                
            }
            else{
                cartData[itemId][size] = 1;
                        }
        }
        else{
            cartData[itemId] ={};
            cartData[itemId][size] = 1;  
        }
        setCartItems(cartData);
    }


    const getCartCount=()=>{
        let totalcount =0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item]>0) {
                        totalcount += cartItems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return totalcount;
    }

    const updateQuatity = async(itemsId,size,quantity) =>{
         let cartData = structuredClone(cartItems);
         cartData[itemsId][size] = quantity;
         setCartItems(cartData);
    }

    const getCartAmount= ()=>{
        let totalamount =0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product.id === items);
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0) {
                        totalamount += cartItems[items][item] * itemInfo.price;
                    }
                }
                catch(error){

                }
            }

        }
        return totalamount;
    }
    


const value ={
    products,currancy, delivery_fee,
    search,setSearch,showSearch,setShowsearch,
    cartItems,addToCart,getCartCount,updateQuatity,
    getCartAmount,navigate
}

return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)


}