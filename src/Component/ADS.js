import classes from "./ADS.module.css";
import { memo } from "react";
const ADS = ({urls}) => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
    {
      urls.map((item, index) => {
        return(
        
          <button key={index} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={`${index === 0 && 'active'}`} aria-current={`${index === 0 && 'true'}`}  aria-label={`slide ${index + 1}`}></button> 
          
        )
      })
    }
    </div>
  <div className="carousel-inner">
 
      {urls.map((url, index) => {
          return(
            <div key={index}  className={`carousel-item ${index === 0 && 'active' }`} data-bs-interval="10000">
            <a  href="#">
           <img  src={url} alt="test" className="d-block w-100"/>
          </a>
          </div>
          )
      })}
   
  
 
  </div>
  
</div>
  );
};

export default  memo(ADS);


  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div> */}