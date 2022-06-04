import Index from "./layouts/admin/Index";
import {BrowserRouter} from 'react-router-dom';
import AuthLayaut from  "./layouts/auth/AuthLayaut"

function App() {
  return (
    <BrowserRouter>
    {/* <Index/> */}
    <AuthLayaut/>
    </BrowserRouter>

    
  );
}

export default App;
