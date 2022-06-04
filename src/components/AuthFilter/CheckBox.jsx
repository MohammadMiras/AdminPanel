import { FastField } from 'formik';


const CheckBox = ({formik,type,name,icon,label}) => {

    return (
        <div className="form-check form-switch">
            <FastField className="form-check-input" type={type} name={name} />
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{label}</label>
        </div>
    );
}
export default CheckBox;