import { createContext, useState } from "react";
import {GetUserService} from "../Services/HttpServies"

export const  AdminContext = createContext({
    showSlider:false,
    setShowSlider:()=>{},
    userInfo:{username:"" , password:"" }
})

export const  AdminContextContainer = ({children})=>{
    const [showSlider ,setShowSlider] = useState(false)
    console.log(GetUserService());
    return(
        <AdminContext.Provider value={{
            showSlider,
            setShowSlider
        }}>
            {children}
        </AdminContext.Provider>
    );
}