import CheckBox from "./CheckBox";
import Input from "./Input"

const  AuthFilterControl=(props)=>{
    switch (props.control) {
        case 1:
            case 'input':
                return <Input {...props}/>
            case 'check' :
                return <CheckBox {...props}/>
   
        default:
           return null;
    }

}

export default AuthFilterControl;