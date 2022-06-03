import React from "react";
import Product from "./Product/Product";
import AddProduct from "./Product/AddProduct";
import AddCategory from "./Category/AddCategory";
import Category from "./Category/Category";
import Dashboard from "./dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
const Continer = () => {

    return (
        <>
            <Routes>
                {/* <Dashboard/> */}
                {/* <Category/> */}
                <Route path="/" element={<Dashboard/>} />
                <Route path="/Category" element={<Category/>} />
                <Route path="/Product" element={<Product/>} />
                <Route path="*" element={<Dashboard/>} />                
            </Routes>
            <AddProduct />
            <AddCategory />
        </>
    )
}

export default Continer