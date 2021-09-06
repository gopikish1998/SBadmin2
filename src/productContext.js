import React from "react";
import {useState} from "react";

let ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({children})=>{
    const [prodList, setProdList] = useState([])
    return <ProductContext.Provider value={{prodList, setProdList}}>
        {children}
    </ProductContext.Provider>
}