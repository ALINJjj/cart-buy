import classes from "./ADS.module.css";
import keeper from "../keeper.png"
const ADS = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <a href="#">
           <img src={keeper} alt="test" className="d-block w-100"/>
           <div className="carousel-caption  d-md-block">
        
        <p>3ard alfa 5 ashhor b 100000</p>
      </div>
          </a>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <a href="#">
            {" "}
            <h2 className={classes["ad-text"]}>
              الهَوَسُ :طرف من الجنون وخِفَّة العقل، من أعراضه تضخُّم الأفكار
              
            </h2>
          </a>
    </div>
    <div className="carousel-item">
    <a href="#">
            {" "}
            <h2 className={classes["ad-text"]}>
              الهَوَسُ :طرف من الجنون وخِفَّة العقل، من أعراضه تضخُّم الأفكار
              وانتقالها السَّريع من موضوع إلى آخر بدون التمييز بين قيم المعاني
              وسرعة تداعيها، مع الميل إلى النكتة اللاذعة والإحساس المفرط
              بالانبساط والمرح
            </h2>
          </a>
    </div>
  </div>
  
</div>
  );
};

export default ADS;


