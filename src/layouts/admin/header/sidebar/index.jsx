import React, { useContext } from "react";
import { AdminContext } from "../../../../context/adminLayoutContext";
import UserInfo from "./UserInfo";
import SidebarGroupTitle from "./SidebarItemTitle";
import SidebarGroupItem from "./SidebarGroupItem";

const Sliderbar = () => {
    const { showSlider } = useContext(AdminContext)

    return (
        <section id="sidebar_section">
            <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSlider ? "expanded" : null}`}>
                <div className="p-0 m-0">
                    <UserInfo name="Mohammad" image="/assets/images/avatar/user2.jpg" />
                    {/* active */}
                    <SidebarGroupItem targetpath={"/"} title={"داشبورد"}  icon={"fas fa-tachometer-alt"} />
                    {/* <!-- =================================== --> */}

                    < SidebarGroupTitle title={"فروشگاه"} />
                    <SidebarGroupItem targetpath={"/category"} title={"مدیریت گروه محصول"}  icon={"fas fa-stream"} />
                    <SidebarGroupItem targetpath={"/product"} title={"مدیریت محصول"}  icon={"fas fa-cube"}/>
                    <SidebarGroupItem targetpath={"/Company"} title={"مدیریت برند ها"}  icon={"fas fa-copyright"}/>
                    <SidebarGroupItem targetpath={"/"} title={"مدیریت گارانتی ها"}  icon={"fab fa-pagelines"}/>
                    <SidebarGroupItem targetpath={"/"} title={"مدیریت رنگ ها"} icon={"fas fa-palette"} />
                    <SidebarGroupItem targetpath={"/"} title={"مدیریت تخفیف ها"}  icon={"fas fa-percentage"}/>                   

                    {/* <!-- =================================== --> */}

                    <SidebarGroupTitle title={"سفارشات و سبد"} />
                    <SidebarGroupItem targetpath={"/test"} title={"مدیریت سبد خرید "} icon={"fas fa-shopping-basket"}/>                 
                    <SidebarGroupItem targetpath={"/test"} title={"مدیریت سفارشات"} icon={"fas fa-luggage-cart"} />                   
                    <SidebarGroupItem targetpath={"/test"} title={"مدیریت نحوه ارسال"} icon={"fas fa-truck-loading"}/> 
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title={"کاربران و همکاران"} />

                    <SidebarGroupItem targetpath={"/test"} title={"مشاهده کاربران"} icon={"fas fa-users "}/> 
                    <SidebarGroupItem targetpath={"/test"} title={"نقش ها"} icon={"fas fa-user-tag"}/> 
                    <SidebarGroupItem targetpath={"/test"} title={"مجوز ها"} icon={"fas fa-shield-alt "}/> 
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title={"ارتباطات"} />
                    <SidebarGroupItem targetpath={"/test"} title={"سوال ها"} icon={"fa-question-circle"}/> 
                    <SidebarGroupItem targetpath={"/test"} title={"نظرات"} icon={"fa-comment"}/> 
                    {/* <!-- <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> --> */}
                </div>
            </div>
        </section>
    );
}
export default Sliderbar