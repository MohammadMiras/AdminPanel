import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthFilterControl from '../../components/AuthFilter/AuthFilterControl';

import { useNavigate } from 'react-router-dom';

import { Alert } from '../../Utility/Alert';
import HttpService from '../../Services/HttpServies';


const initialValues ={
    phone: "",
    password: "",
    remember:false
}
const onSubmit = (values ,navigate , submitMathods)=>{

    HttpService
            (
                '/auth/login',
                'post' ,
                {...values,remember:values.remember? 1 : 0}
            ).then
            (
                res=>{
                if(res.status === 200)
                {
                    submitMathods.setSubmitting(false)
                    localStorage.setItem('LoginUser',JSON.stringify(res.data))
                    navigate('/')
                }
                else{
                        submitMathods.setSubmitting(false)
                        Alert("خطا",res.data.message,"error")
                    }
                }
            ).catch(error=>{console.log(error);})
}
const validationSchema = Yup.object({
    phone:Yup.number().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[a-zA-Z0-9@#$!%&]+$/, 'فقط حروف و عدد'),
    remember:Yup.boolean(),
})

const Login = () => {
    const navigate = useNavigate();
    return (
                <Formik
                initialValues={initialValues}
                onSubmit={(values,submitMathods)=>onSubmit(values,navigate ,submitMathods)}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            // console.log(formik);
                            return(                                
                                <div className="wrap-login100">
                                    <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                        <span className="login100-form-title">
                                            ورود اعضا
                                        </span>

                                        <AuthFilterControl
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="phone"
                                        icon="fa fa-envelope"
                                        label="تلفن"
                                        />

                                        <AuthFilterControl
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon="fa fa-lock"
                                        label="رمز عبور"
                                        />
                                          <div className="text-center p-t-12 p-b-45">
                                           <AuthFilterControl
                                           formik={formik}
                                           control="check"
                                           type="checkbox"
                                           name="remember"
                                           icon=""
                                           label="مرا به خاطر بسپار"
                                           />
                                        </div>
                                        
                                        <div className="container-login100-form-btn">
                                            <button className="login100-form-btn" disabled={formik.isSubmitting}>
                                                {formik.isSubmitting ?("لطفا صبر کنید...."):("ورود")}
                                            </button>
                                        </div>
                                      
                                    </Form>
                                    <div className="login100-pic js-tilt" data-tilt>
                                        <img src="/auth/images/img-01.png" alt="IMG"/>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik>

    );
}

export default Login;