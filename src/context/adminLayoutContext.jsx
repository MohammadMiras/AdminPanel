import { createContext, useState } from "react";

export const  AdminContext = createContext({
    showSlider:false,
    setShowSlider:()=>{}
})

export const  AdminContextContainer = ({children})=>{
    const [showSlider ,setShowSlider] = useState(false)
    return(
        <AdminContext.Provider value={{
            showSlider,
            setShowSlider
        }}>
            {children}
        </AdminContext.Provider>
    );
}