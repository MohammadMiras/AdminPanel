import Index from "./layouts/admin/Index";
import {Navigate, useLocation} from 'react-router-dom';
import AuthLayaut from  "./layouts/auth/AuthLayaut"

function App(props) {
  const location = useLocation();
  const logintoken = localStorage.getItem('LoginUser')
  return (
    <>
    {
      location.pathname.includes('/auth') ? (
        <AuthLayaut/> 
      ):(
        <>
          {
            logintoken ? (<Index/>):(<Navigate to="/auth/login"/>)
            
          }
        </>
      )
    }

    </>
    

    
  );
}

export default App;
