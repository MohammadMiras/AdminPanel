 import axios from "axios";
 import { UrlApi } from "../Utility/Statics";

 const  HttpService =(url,method ,data=null)=>{

    const logintoken = localStorage.getItem('LoginUser')
    console.log(logintoken)
    return axios({
        url : UrlApi+url,
        method,
        data,
        headers:{
            Authorization: `${logintoken ? ("Bearer" + logintoken.token) : null }`,
            "Content-Type":"application/json"
        }
    })
 }
 export default HttpService

 export const GetUserService =()=>{
     return HttpService('/auth/user','get')
 }
