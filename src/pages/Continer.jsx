import React from "react";
import Product from "./Product/Product";
import AddProduct from "./Product/AddProduct";
import AddCategory from "./Category/AddCategory";
import Category from "./Category/Category";
import Dashboard from "./dashboard/Dashboard";
import Company from "./Company/Company";
import AddCompany from  "./Company/AddCompany";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
const Continer = () => {

    return (
        <>
            <Routes>
                {/* <Dashboard/> */}
                {/* <Category/> */}
                <Route path="/" element={<Dashboard/>} />
                <Route path="/Category" element={<Category/>} />
                <Route path="/Product" element={<Product/>} />
                <Route path="/Company" element={<Company/>} />
                <Route path="*" element={<Dashboard/>} />    
               
                           
            </Routes>
            <AddProduct />
            <AddCategory />
            <AddCompany/>
        </>
    )
}

export default Continer