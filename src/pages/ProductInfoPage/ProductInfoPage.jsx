import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductInfoPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductRating } from "../../components/ProductRating/ProductRating";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

const API_URL = "https://fakestoreapi.com/products/";

const ProductInfoPage = () => {
  const { id } = useParams();

  const [productInfo, setProductInfo] = useState(null);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const url = `${API_URL}${id}`;
      const response = await axios.get(url);
      setProductInfo(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const goBack = () => navigate("/products");

  return (
    <div className={styles.wrapper}>
      {productInfo ? (
        <>
          <div className={styles.productInfoWrapper}>
            <h1>{productInfo.title}</h1>
            <img
              className={styles.image}
              src={productInfo.image}
              alt="Product Image"
            />
            <p className={`${styles.title} ${styles.info}`}>
              Price: {productInfo.price}
            </p>
            <p className={`${styles.description} ${styles.info}`}>
              Description: {productInfo.description}
            </p>
            <ProductRating rating={productInfo.rating.rate} />
          </div>
          <button className={styles.goBackButton} onClick={goBack}>
            Назад
          </button>
        </>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export { ProductInfoPage };
