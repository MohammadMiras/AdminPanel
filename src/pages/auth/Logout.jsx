import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UrlApi } from "../../Utility/Statics";

const Logout = () => {

    const [loding, setloding] = useState(true);

    useEffect(() => {
        const logintoken = JSON.parse(localStorage.getItem('LoginUser'))
        console.log(logintoken);
        console.log(loding)
        if (logintoken.token) {
            axios.get(UrlApi + '/auth/logout', {
                headers: { Authorization: `Bearer ${logintoken.token}` }
            }).then(res => {

                localStorage.removeItem('LoginUser')
                setloding(false);
            })
        }
        else {
            setloding(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                loding ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>


                ) :
                    (<Navigate to="/auth/login" />)
            }
        </>
    )


}

export default Logout;