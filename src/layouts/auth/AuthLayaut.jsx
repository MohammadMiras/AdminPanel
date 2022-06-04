import { Routes ,Route } from "react-router-dom";
import Login from "../../pages/auth/Login";

const AuthLayaut = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <Routes>
                   <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AuthLayaut;