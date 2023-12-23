import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:title" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
