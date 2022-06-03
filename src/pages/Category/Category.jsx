/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Table from "../../components/Table";
import AddCategory from "./AddCategory";
import {datainfoCategory ,Fieldoperation} from "../../Models/Table/TableFields"

const Category = () => {

    
    const data =[
        {id: 1 , title:"دسته بندی شماره 1", status: 0 },
        {id: 2 , title:"دسته بندی شماره 2", status: 1 },
        {id: 3 , title:"دسته بندی شماره 3", status: 0 },
        {id: 5 , title:"دسته بندی شماره 4", status: 1 },
        {id:6 , title:"دسته بندی شماره 4", status: 1 },
        {id: 7 , title:"دسته بندی شماره 4", status: 1 },
        {id: 8 , title:"دسته بندی شماره 4", status: 1 },
        {id: 9 , title:"دسته بندی شماره 4", status: 1 },
        {id: 10 , title:"دسته بندی شماره 4", status: 1 }
    ]

   
const addFieldoperation =
{
    title:"عملیات",
    element : (num) =>Fieldoperation(num)
}

    return (
        <>
        
        <div id="manage_product_category" className="manage_product_category main_section">
            <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید" />
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_product_category_modal">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </div>
            </div>
          
            <Table data={data} datainfo={datainfoCategory} addFieldoperation={addFieldoperation}/>           
        </div>
        <AddCategory />
        </>
    );
}

export default Category;