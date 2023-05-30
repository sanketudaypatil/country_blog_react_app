import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";



import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("")
    const [query , setQuery] = useState('')
    const navigate = useNavigate();

    const searchQueryHandler = (event) =>{
        if (event.key==="Enter" && query.length > 0){
            navigate(`/search/${query}`)
            
        }
    }

    useEffect(() =>{
        const bg = Math.floor(Math.random()* 9)
        setBackground(bg)
        console.log(background)
    },[])

    return (
        <div className="heroBanner">
            
                <div className="backdrop-img">
                    <Img src={`../../../../n${background}.jpeg`} />
                </div>
           

            
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle ">
                       Search Diffrent Information Related Blogs..
                    </span>
                    
                   
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;