import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthFilterControl from '../../components/AuthFilter/AuthFilterControl';


const initialValues ={
    phone: "",
    password: "",
    remember:false
}
const onSubmit = (values)=>{
    console.log(values);
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
    return (
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
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
                                            <button className="login100-form-btn">
                                                ورود
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