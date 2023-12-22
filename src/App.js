import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import Login from "./components/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
<Route path="/" element = {<PrivateRouter/>}>

 <Route path=""  element= {<Login/>}/>
 <Route path="/home"  element= {<Home/>}/>
 <Route path="/about"  element= {<About/>}/>
 <Route path="/products"  element= {<Products/>}/>
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
