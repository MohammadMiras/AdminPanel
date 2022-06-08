 import axios from "axios";
 import { UrlApi } from "../Utility/Statics";

 const  HttpService =(url,method ,data=null)=>{

    const logintoken = localStorage.getItem('LoginUser')
    return axios({
        url : UrlApi+url,
        method,
        data,
        headers:{
            // Authorization: `${logintoken ? ("Bearer " + logintoken.token) : null }`,
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODUxMTg2NjAyZmJmYTI0Y2M5MWVkOGVhYWNhYmJhNTZhNzVhMzlhMjEyYzhhZDgzODU3NjUxNjFhNmVmMzJhYzgyMDQ4YTMwMDMyNDdjYWIiLCJpYXQiOjE2NTQ2Mjc2NTMuNDYxODk0OTg5MDEzNjcxODc1LCJuYmYiOjE2NTQ2Mjc2NTMuNDYxODk5MDQyMTI5NTE2NjAxNTYyNSwiZXhwIjoxNjg2MTYzNjUzLjQ1MTQ2ODk0NDU0OTU2MDU0Njg3NSwic3ViIjoiMTAiLCJzY29wZXMiOltdfQ.MEPwT06MHfXbKTW0Fg-PAMaDHrDqprlLUx229SYjaVqff3A0iy3L7bJKp9aWntwlozHx4ELFj1XRzMDnyIyAGdtbIDwjJfu8JU5Zit2rb7e7_QAVw5w1eNHkt5wBy0PERlXkH8jg5EIYd1FwikgCbdwi6JICzdCLhHEnezj2Bc65NR-2IECwQB1HCff9D-EdWa241ZlzzFXQUyHJPlVFSegBuAP86IhgvCLRFt4ULGvq1A-yd6LjTXkQVF8rznjK8NAOxr5VdSZJZ6F6_Qrtique2W1ALwILV1BMMkQeYRfmF6yYq5_aZPg_NdgrLw4KWYZrDB51pQLAdPpLUpdAFeTaUav6k271rx-OEAV1ubbyCK7bq_eF0pDSRmTiD9E4QL8dxKlESfpWQaLzQmrxBq3ScFawLU3qzJ7K0jNw14QSMyZKkfibjmVC8DG1dzwXU7x88KyJcN0EC3UOBwIRSBZXqw3VT9jBc_S09Ez8J5dXznTO0ceqHd40CTpyKbz4w6u6CDWuPMTUUctTvqfRvoDv8yHhe90rO_e2tFe1ezlTABS4yNivQQhsHnHii2bCpZqg91mfFP4IBwmiOaC0co1ovpN5dsUbsyyWaLUpol3SNZ1-Hzpkep_NAnwghhYbYKBR1UiarIzLWnKWzA072cB5rsd0GB_Bd-FcL8OBHLM',
            "Content-Type":"application/json"
        }
    })
 }
 export default HttpService

 export const GetUserService =()=>{
     return HttpService('/auth/user','get')
 }

 export const GetCategoryService =(id = null)=>{

    return HttpService( `/admin/categories${id ? `?parent= + ${id}`: ""}`,'get')
 }