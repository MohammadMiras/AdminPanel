import Table from "../../components/Table";
import { datainfoProduct, Fieldoperation, FilterSearchCategory } from "../../Models/Table/TableFields"
const ProductTable = () => {
    let data = [
        {
            id: 1,
            title: "product 1",
            category: "category 1",
            price: "200",
            stock: "12",
            numLike: "10",
            status: 1
        },
        {
            id: 3,
            title: "product 3",
            category: "category 1",
            price: "200",
            stock: "12",
            numLike: "10",
            status: 1
        },
        {
            id: 2,
            title: "product 2",
            category: "category 1",
            price: "200",
            stock: "12",
            numLike: "10",
            status: 0
        }

    ]
    const addFieldoperation =
    {
        title: "عملیات",
        element: (num) => Fieldoperation(num)
    }


    return (
        <Table data={data} datainfo={datainfoProduct} addFieldoperation={addFieldoperation} filterSearch={FilterSearchCategory}>

            <button className="btn btn-success d-flex justify-content-center align-items-center"
                data-bs-toggle="modal" data-bs-target="#add_product_modal">
                <i className="fas fa-plus text-light"></i>
            </button>

        </Table>
    )
}
export default ProductTable;