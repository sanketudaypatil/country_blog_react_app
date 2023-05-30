import React from "react";
import { Link, useParams } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

import Img from "../../components/lazyLoadImg/Img";



const Details = () => {
  const {id} = useParams()
  const blogData = [
    {
      id :1,
      image: "https://i.ibb.co/hL6FFfz/b1.jpg",
      title: "India",
      date: "01-01-2023",
      author: "Sanket Patil",
      discription:"India, country that occupies the greater part of South Asia. Its capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India’s administrative centre. "
    },
    {
      id :2,
      image: "https://i.ibb.co/zFht9Gg/b2.jpg",
      title: "USA",
      date: "11-01-2023",
      author: "Swapnil Patil",
      discription:" The United States is the world's third-largest country by both land and total area.[c] It shares land borders with Canada to its north and with Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia, and other nations."
    },
    {
      id :3,
      image: "https://i.ibb.co/vzx8B59/b3.jpg",
      title: "Japan",
      date: "11-01-2023",
      author: "Gaurav Patil",
      discription:"Japan is a part of the Ring of Fire, and spans an archipelago of 14,125 islands, with the five main islands being Hokkaido, Honshu , Shikoku, Kyushu, and Okinawa. Tokyo is the nation's capital  "
    },
    {
      id :4,
      image: "https://i.ibb.co/sR7TFky/b4.webp",
      title: "Spain",
      date: "11-02-2023",
      author: "Mayur Patil",
      discription:"Spain is known for its food, Flamenco music and dance, siesta, bullfights, horses, arts and literature, architecture, a Moorish heritage, its islands, Mediterranean beaches, wines, fruits and vegetables, and football (soccer)."
    },
    {
      id :5,
      image: "https://i.ibb.co/syjhb4s/b5.jpg",
      title: "Tokyo",
      date: "16-03-2023",
      author: "Roy Kapoor",
      discription:"Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines."
    },
    {
      id :6,
      image: "https://i.ibb.co/6vXChL6/r6.jpg",
      title: "Rio",
      date: "22-03-2023",
      author: "Shamal Shinde",
      discription:"Rio de Janeiro is one of the most visited cities in the Southern Hemisphere and is known for its natural settings, carnival, samba, bossa nova, and balneario beaches such as Barra da Tijuca, Copacabana, Ipanema, and Leblon."
    }
    ,
    {
      id :7,
      image: "https://i.ibb.co/6vXChL6/r6.jpg",
      title: "Berlin",
      date: "26-03-2023",
      author: "Swaroop Shinde",
      discription:"Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that's somehow all go yet relaxed. In fact, the city is best known for its striking contrasts."
    }
    ,
    {
      id :8,
      image: "https://i.ibb.co/CVCBfrf/b7.jpg",
      title: "Moscow",
      date: "26-03-2023",
      author: "Visahl Shinde",
      discription:"Moscow is the capital city and the most populous federal subject of Russia. The city is a major political, economic, cultural and scientific center in Russia and in Eastern Europe."
    }
    ,
    {
      id :9,
      image: "https://i.ibb.co/CVCBfrf/b7.jpg",
      title: "Nairobi",
      date: "28-03-2023",
      author: "Mayur Desai",
      discription:"Nairobi is situated at in South-Central Kenya, 140 Kilometers (87 miles) south of the Equator . It is surrounded by 113 km² ( 70 mi²) of plains, cliffs and forest that make up the city's Nairobi National Park."
    }
    ,
    {
      id :10,
      image: "https://i.ibb.co/wYQvjM3/b9.jpg",
      title: "Oslo",
      date: "29-03-2023",
      author: "Snehal Kumbhar",
      discription:"Oslo is the capital of Norway and the country's largest city with over 650,000 inhabitants. It is a compact capital city surrounded by the Oslo Fjord on its south side and the national protected forest Marka to its east, north and west."
    }
  ];
  const card1=blogData[1]
  const card2 = blogData[3]
  const card3 = blogData[5]

  const blogDetails = blogData[id-1]
   

return (
    <div className="">
        <div className="detailsBanner">
            <div className="backdrop-img">
                <Img src={blogDetails.image} />
            </div>
                <ContentWrapper> 
                    <div className="content">
                        <div className="left">
                            <Img
                                className="posterImg"
                                src={
                                blogDetails.image
                            }
                            />
                        </div>
                        <div className="right">
                            <div className="title">
                                {`Know About ${blogDetails.title}`}
                            </div>
                            <div className="subtitle">
                                {blogDetails.title}
                            </div>
                        <div className="row">
                            <div className="overview">
                                <div className="heading">
                                    Overview
                                </div>
                                <div className="description">
                                    {blogDetails.discription}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                <div>
                    <Link to={`/`}>
                        <button className="button" type="button">Back to Home...</button>
                    </Link>

                </div>
            </ContentWrapper>
        




{/* similar card container  */}

        
      
            <div className="similar-card-container">
                <div className="pageTitle">
                        Similar Cards
                    </div>
                <div className="similar-card">
                    

                {/* card 1 */}

                    <div className="cards">
                      <Link to={`/blog/${card1.id}`}> 
                        <div className="imags">
                            <Img src={card1.image} alt="card__image" className="card__image" />
                        </div>
                      </Link>
                      <div className="card__body">
                              <span className="tag tag-blue">{card1.title}</span>
                              <h4 className="title">{`Know About ${card1.title}`}</h4>
                              <p>{card1.discription}</p>
                      </div>
                      <div className="card__footer">
                              <div className="user">
                                  <div className="user__info">
                                      <h5 className="author">{card1.author}</h5>
                                      <small className="date">{card1.date}</small>
                                  </div>
                              </div>
                      </div>
                      <div>
                          <Link to={`/blog/${card1.id}`}>
                                <button className="button" type="button">Learn More....</button>
                          </Link>
                       </div>
                  </div>

                {/* card 2  */}

                <div className="cards">
                      <Link to={`/blog/${card2.id}`}> 
                        <div className="imags">
                            <Img src={card2.image} alt="card__image" className="card__image" />
                        </div>
                      </Link>
                      <div className="card__body">
                              <span className="tag tag-blue">{card2.title}</span>
                              <h4 className="title">{`Know About ${card2.title}`}</h4>
                              <p>{card2.discription}</p>
                      </div>
                      <div className="card__footer">
                              <div className="user">
                                  <div className="user__info">
                                      <h5 className="author">{card2.author}</h5>
                                      <small className="date">{card2.date}</small>
                                  </div>
                              </div>
                      </div>
                      <div>
                          <Link to={`/blog/${card2.id}`}>
                                <button className="button" type="button">Learn More....</button>
                          </Link>
                       </div>
                  </div>

                  {/* card 3 */}

                  <div className="cards">
                      <Link to={`/blog/${card3.id}`}> 
                        <div className="imags">
                            <Img src={card3.image} alt="card__image" className="card__image" />
                        </div>
                      </Link>
                      <div className="card__body">
                              <span className="tag tag-blue">{card3.title}</span>
                              <h4 className="title">{`Know About ${card3.title}`}</h4>
                              <p>{card3.discription}</p>
                      </div>
                      <div className="card__footer">
                              <div className="user">
                                  <div className="user__info">
                                      <h5 className="author">{card3.author}</h5>
                                      <small className="date">{card3.date}</small>
                                  </div>
                              </div>
                      </div>
                      <div>
                          <Link to={`/blog/${card3.id}`}>
                                <button className="button" type="button">Learn More....</button>
                          </Link>
                       </div>
                  </div>
                
                </div>
                </div>
                
                </div>
            </div>
        
           
      
                
                

                
    
            
)
};
export default Details;