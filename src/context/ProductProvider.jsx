import { createContext, useContext } from "react";
import { useEffect ,useState} from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [search,setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const URL = "https://dummyjson.com/products/search?q=${query}";
  console.log(search);
    const getProducts = async () => {
      setLoading(true);
  
      try {
        const res = await axios(
          `https://dummyjson.com/products/search?q=${search}`
        );
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getProducts();
    }, [search]);


  return <ProductContext.Provider value={{data,loading,search,setSearch}}>
    {children}
    </ProductContext.Provider>;
};

export  default ProductProvider

export const  useProducts  = () =>{

 return   useContext(ProductContext)

}