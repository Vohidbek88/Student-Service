import { createContext, useContext, useState } from "react";

export const ServicesContext=createContext();

export const ServicesContextProvider=({children})=>{
    
    const [userData,setUser]=useState(null);

    
    
    
    return <ServicesContext.Provider value={{setUser,userData}}>{children}</ServicesContext.Provider>
}
