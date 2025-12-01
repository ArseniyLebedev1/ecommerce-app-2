import styles from "./ProductRating.module.css";

const ProductRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`fa fa-star ${
            index < Math.round(rating) ? styles.active : ""
          }`}
        ></span>
      ))}
    </div>
  );
};

export { ProductRating };
