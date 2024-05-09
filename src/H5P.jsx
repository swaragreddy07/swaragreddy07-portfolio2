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
function H5P() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>Movie Database</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          "Movie Database" is a website that provides information about the top
          1000 IMDb movies and TV shows. I created this project using Python,
          utilizing semantic search techniques and the Sentence Transformer
          model.
        </p>
      </div>
      <div class={styles.last}>
        <a
          href="https://github.com/swaragreddy07/movieDatabase"
          target="_blank"
        >
          <button class={`${styles.button} ${style.button}`}>View Code</button>
        </a>
      </div>
    </div>
  );
}
export default H5P;
