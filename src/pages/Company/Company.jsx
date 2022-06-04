import Table from "../../components/Table";
import { datainfoCompany, Fieldoperation, FilterSearchCompany } from "../../Models/Table/TableFields"


const Company = () => {
    const data = [
        {
            id: "1",
            Name: "شرکت اول",
            Logo: "logo.png",
            Description: "این"
        }
    ]
    const addFieldoperation = {
        title: "عملیات",
        element: (num) => Fieldoperation(num)
    }
    return (
        <div id="manage_brand_section" className="manage_brand_section main_section ">
            <h4 className="text-center my-3">مدیریت برند ها</h4>
            <Table data={data}
                addFieldoperation={addFieldoperation}
                datainfo={datainfoCompany}
                filterSearch={FilterSearchCompany}>
                <button className="btn btn-success d-flex justify-content-center align-items-center"
                        data-bs-toggle="modal" 
                        data-bs-target="#add_brand_modal">
                    <i className="fas fa-plus text-light"></i>
                </button>
            </Table>
        </div>
    );
}
export default Company