/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-secondary top_navbar py-0">
            <div className="container-fluid h-100 pe-0">
                <RightContent />
                <LeftContent />
            </div>
        </nav>
    )
}

export default Nav