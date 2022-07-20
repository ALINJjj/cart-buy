import classes from "./ADS.module.css";
import Keeper from "../keeper.png";
const ADS = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          {/* <img src={Keeper} class="d-block w-100" alt="..."/> */}
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
        <div class="carousel-item">
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
        <div class="carousel-item">
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
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ADS;
