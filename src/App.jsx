import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage/MainPage"
import { ProductInfoPage } from "./pages/ProductInfoPage/ProductInfoPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"


const App = () => {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<MainPage />}></Route>
        <Route path="/products/:id" element={<ProductInfoPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  )
}

export {App}