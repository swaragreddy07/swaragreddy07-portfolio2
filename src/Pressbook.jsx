import styles from "./smart.module.css";
import style from "./canvas.module.css";
import account from "./assets/canvas_acc.png";
import custom from "./assets/custom.png";
import modules from "./assets/modules.png";
import video from "./assets/video.png";
import h from "./assets/h_content.png";
import h2 from "./assets/h2.png";
import h3 from "./assets/h3.png";
import Styles from "./home.module.css";
function Pressbook() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>Simple Recipes</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          "Simple Recipes" is a website that displays recipes for various
          dishes. I created this website using HTML, CSS, JavaScript, and React.
        </p>
      </div>
      <div class={styles.last}>
        <a href="https://swarag-recipes.netlify.app/" target="_blank">
          <button class={`${styles.button} ${style.button}`}>
            Visit Simple Recipes
          </button>
        </a>
      </div>
    </div>
  );
}
export default Pressbook;
