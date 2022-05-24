

const SidebarGroupItem = ({title,icon}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="py-1 text-start pe-4 sidebar_menu_item sidebar_item" >
            <i className={`ms-3 icon ${icon} text-light`}></i>
            <span className="hiddenable no_wrap font_08">{title}</span>
        </a>

    );
}
export default SidebarGroupItem;