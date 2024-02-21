import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";

export function SelectLevelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              Легкий
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              Cредний
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              Сложный
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
