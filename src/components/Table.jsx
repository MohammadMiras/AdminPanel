import React, { useEffect, useState } from "react";

const pageSize = 2
const Table = ({ data, datainfo, addFieldoperation ,children ,filterSearch }) => {
    const [datatable, setdatatable] = useState([]);
    const [currentPage, setcurrentpage] = useState(1);
    const [pages, setpages] = useState([]);
    const [pagecount, setpagecount] = useState(1);
    const [initdata ,setinitdata] = useState(data);
    const[searchtext ,setsearchtext] = useState("");  

    useEffect(() => {

        let pcount = Math.ceil(initdata.length / pageSize)
        let numberPages = []
        for (let index = 1; index <= pcount; index++) numberPages = [...numberPages, index]

        setpagecount(pcount);
        setpages(numberPages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initdata]);

    useEffect(() => {
        var start = (currentPage * pageSize) - pageSize;
        var end = (currentPage * pageSize)
        setdatatable(initdata.slice(start, end))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage,initdata])
    useEffect(()=>{
        setinitdata(data.filter(i=>i[filterSearch.field].includes(searchtext)));
        console.log("$$"+initdata.length);
        setcurrentpage(1)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchtext , data])
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text"
                               className="form-control" 
                               placeholder="قسمتی از عنوان را وارد کنید" 
                               onChange={(e)=>setsearchtext(e.target.value)}
                               
                        />
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                   {children}
                </div>
            </div>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {datainfo.map(i => (<th key={i.field+"tr"}>{i.title}</th>))}
                        {addFieldoperation ? <th>{addFieldoperation.title}</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {datatable.map(d => (
                        <tr key={d.id+"-data-"+d.id}>
                            {datainfo.map(i => (
                                <td key={i.field + "-" + d.id}>
                                    {
                                        i.field === "status" ? (d[i.field] === 0 ?
                                            <span className="text-danger">غیر فعال

                                            </span> :
                                            <span className="text-success">
                                                فعال
                                                <i className="fa fa-check-circle m2" aria-hidden="true"></i>
                                            </span>) :
                                            (d[i.field])

                                    }
                                </td>
                            ))}
                            {addFieldoperation ? (<td>
                                {addFieldoperation.element(d.id)}
                            </td>) : (null)}
                        </tr>

                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className={`page-item ${currentPage === 1 ? "d-none" : null}`} >
                        <span className="page-link" onClick={() => setcurrentpage(currentPage - 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                    {pages.map(p => (
                        <li key={p} className={`page-item ${p === currentPage ? "active" : null}`} onClick={() => setcurrentpage(p)}>
                            <span className="page-link">{p}</span>
                        </li>

                    ))}

                    <li className={`page-item ${currentPage === pagecount || currentPage > pagecount ? "d-none" : null}`}>
                        <span className="page-link" aria-label="Next" onClick={() => setcurrentpage(currentPage + 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );

}

export default Table