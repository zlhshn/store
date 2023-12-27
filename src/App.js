import LoginProvider from "./context/LoginProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <LoginProvider>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </LoginProvider>
  );
};

export default App;
