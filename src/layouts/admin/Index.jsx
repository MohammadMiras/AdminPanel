/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { AdminContext, AdminContextContainer } from "../../context/adminLayoutContext";
import Category from "../../pages/Category/Category";
import Dashboard from "../../pages/dashboard/Dashboard";
import Product from "../../pages/Product/Product";

import Header from "./header/index";

const Index = () => {
    const {showSlider} =useContext(AdminContext)
    return (
        <AdminContextContainer>
            <Header />

            <section id="content_section" className={`bg-light py-2 px-3 ${showSlider ? "with_sidebar": null}`}>
                
                {/* <Dashboard/> */}
                {/* <Product/> */}
                <Category/>
            </section>
            
            
        </AdminContextContainer>
    );
}

export default Index
