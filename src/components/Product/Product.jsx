import { Link } from "react-router-dom";
import { ProductRating } from "../ProductRating/ProductRating";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <li className={styles.product} key={product.id}>
        <ul className={styles.productDetails}>
          <li className={styles.productTitle}>{product.title}</li>
          <li className={styles.productRating}>
            <ProductRating rating={product.rating.rate} />
          </li>
        </ul>
      </li>
    </Link>
  );
};

export { Product };
