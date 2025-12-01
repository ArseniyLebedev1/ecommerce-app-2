import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.css";

const NotFoundBlock = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.wrapper}>Такой страницы нет ):</p>
      <p className={styles.link}>
        На <Link to="/products">главную</Link>
      </p>
    </div>
  );
};

export { NotFoundBlock };
