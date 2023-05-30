import React  from "react";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import logos from "../../assets/b1.jpeg"
import Img from "../../components/lazyLoadImg/Img"



import "./style.scss";



const BlogCard = (props) =>{
    const {id, image, title , author , date , discription } = props
    console.log(id)
    
  
    

    
    return (

        

        <div className="card">
            
            <Link to={`/blog/${id}`}> 
                <div className="imags">
                    <Img src={image} alt="card__image" className="card__image" />
                </div>
            </Link>
            <div className="card__body">
                <span className="tag tag-blue">{title}</span>
                <h4 className="title">{`Know About ${title}`}</h4>
                <p>{discription}</p>
            </div>
            <div className="card__footer">
                <div className="user">
                    <div className="user__info">
                        <h5 className="author">{author}</h5>
                        <small className="date">{date}</small>
                    </div>
                </div>
                
            </div>
           
        
            <div>
        
                    <Link to={`/blog/${id}`}>
                        <button className="button" type="button">Learn More....</button>
                    </Link>

                </div>
            </div>
           
            
      
    );
};

export default BlogCard;