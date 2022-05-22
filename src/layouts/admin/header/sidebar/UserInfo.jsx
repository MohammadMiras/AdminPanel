/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const  UserInfo = () =>{
    return(
        <li className="pt-1 pb-2 d-flex flex-column avatar_li position-relative">
        <span className="avatar_box">
            <img className="w-100 rounded-circle" src="/assets/images/avatar/user2.jpg" />
        </span>
        <div className="sidebar_avatar_name text-center hiddenable">سید  محمد  میراث</div>
    </li>
    );
}
export default UserInfo