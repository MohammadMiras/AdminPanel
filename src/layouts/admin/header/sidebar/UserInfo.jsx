/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const  UserInfo = ({name ,image}) =>{
    return(
        <div className="pt-1 pb-2 d-flex flex-column avatar_li position-relative mb-2 sidebar_item">
        <span className="avatar_box">
            <img className="w-100 rounded-circle" src={image} />
        </span>
        <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
    </div>
    );
}
export default UserInfo