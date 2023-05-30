import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";


import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";




const Header = () => {
    const navigate = useNavigate();

   
    

    return (
        <header className={`header top `}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                   Blogs
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("/")}
                    >
                        Find More
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("/")}
                    >
                        About Us
                    </li>

                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("/")}
                    >
                        Solutions
                    </li>
                    
                </ul>

               
            </ContentWrapper>
        </header>
    );
};

export default Header;