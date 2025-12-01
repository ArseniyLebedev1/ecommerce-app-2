import axios from "axios";

import { useEffect, useState } from "react";

import styles from "./MainPage.module.css";
import { Header } from "../../components/Header/Header";
import { Products } from "../../components/Products/Products";
import { Footer } from "../../components/Footer/Footer";

const API_URL = "https://fakestoreapi.com/products";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const url = `${API_URL}`
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <header className={styles.headerWrapper}>
            <Header />
          </header>
          <main className={styles.mainWrapper}>
            <Products products={products} />
          </main>
          <footer className={styles.footerWrapper}>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export { MainPage };
