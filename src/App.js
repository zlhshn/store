import LoginProvider from "./context/LoginProvider";
import AppRouter from "./router/AppRouter";



const App = () => {
  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider>
  );
};

export default App;
