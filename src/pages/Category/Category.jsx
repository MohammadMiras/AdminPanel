/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
// import AddCategory from "./AddCategory";
import { datainfoCategory, Fieldoperation ,FilterSearchCategory } from "../../Models/Table/TableFields"
import { GetCategoryService } from "../../Services/HttpServies";
import { Alert } from "../../Utility/Alert";

const Category = () => {

const[data , setdata] = useState([])

    useEffect(()=>{
        handelgetCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[])

const handelgetCategories = async ()=>{
    try{
        const res = await GetCategoryService();
        if(res.status ===200){
           setdata(res.data.data);
           
        }
        else{
           Alert("خطا" , "مشکلی به  وجود امده" ,"error")
        }

    }catch(error){
        Alert("خطا" , "مشکلی در سمت سرور  وجود امده" ,"error")

    }
}   
    const addFieldoperation =
    {
        title: "عملیات",
        element: (num) => Fieldoperation(num)
    }

    return (
        <>

            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                <Table data={data} datainfo={datainfoCategory} addFieldoperation={addFieldoperation} filterSearch={FilterSearchCategory}>
               
                    <button className="btn btn-success d-flex justify-content-center align-items-center"
                        data-bs-toggle="modal" data-bs-target="#add_product_category_modal">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </Table>
            </div>
            
        </>
    );
}

export default Category;