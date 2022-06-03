import {NavLink} from  "react-router-dom"

const SidebarGroupItem = ({title,icon,targetpath}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <NavLink to={targetpath} className="py-1 text-start pe-4 sidebar_menu_item sidebar_item" >
            <i className={`ms-3 icon ${icon} text-light`}></i>
            <span className="hiddenable no_wrap font_08">{title}</span>
        </NavLink>

    );
}
export default SidebarGroupItem;