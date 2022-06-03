import React, {useEffect, useState } from "react";

const pageSize = 2
const  Table=({data , datainfo ,addFieldoperation})=>{
const [datatable ,setdatatable] = useState([]);
const [currentPage ,setcurrentpage] =useState(1);
const [pages ,setpages] = useState([]);
const [pagecount ,setpagecount] = useState(1);
useEffect(()=>{
let pcount =Math.floor(data.length / pageSize)
let numberPages=[]
for (let index = 1; index <= pcount; index++) numberPages=[...numberPages,index]
setpagecount(pcount);
setpages(numberPages);
},[]);

useEffect(()=>{
    var start = (currentPage*pageSize)-pageSize;
    var end = (currentPage*pageSize)
    setdatatable(data.slice(start,end))
    console.log(pagecount);
},[currentPage])
return(
    <>
        <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                       {datainfo.map(i=>(<th key={i.field}>{i.title}</th>))}
                        {addFieldoperation ? <th>{addFieldoperation.title}</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {datatable.map(d=>(
                        <tr key={d.id+"-data"}>
                            {datainfo.map(i=>(
                                <td key={i.field+"-"+d.id}>
                                   {
                                    i.field ==="status"? (d[i.field]===0 ? 
                                        <span className="text-danger">غیر فعال  
                                       
                                        </span>:
                                        <span className="text-success">
                                            فعال
                                        <i className="fa fa-check-circle m2" aria-hidden="true"></i>
                                        </span> ) :
                                        (d[i.field])
                                   
                                   }                               
                                </td>                               
                            ))}
                            {addFieldoperation ? (<td>
                                {addFieldoperation.element(d.id)}
                            </td>) :(null)}
                        </tr>

                    ))}
                </tbody>
        </table>
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className={`page-item ${currentPage===1 ? "d-none" : null }`} >
                        <span className="page-link" onClick={()=>setcurrentpage(currentPage-1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                    {pages.map(p=>(
                        <li key={p} className={`page-item ${p===currentPage?"active" : null}`}onClick={()=>setcurrentpage(p)}>
                            <span className="page-link">{p}</span>
                        </li>

                    ))}                   

                    <li className={`page-item ${currentPage===pagecount ? "d-none" : null}`}>
                        <span className="page-link" aria-label="Next" onClick={()=>setcurrentpage(currentPage+1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>
    </>
);

}

export  default Table