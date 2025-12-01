import { Product } from "../Product/Product";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product  product={product} key={product.id}/>
      ))}
    </ul>
  );
};

export { Products };
