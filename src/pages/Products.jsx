import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Products = () => {
const  [query,setQuery] =useState("")
const [result,setResult] = useState([])

  const URL = "https://dummyjson.com/products/search?q=${query}.";

  const getProducts = async () => {
    try {
      const res = await axios(URL);
      const productsData = res.data.products;
      setResult(productsData)
      
    } catch (error) {
      console.log(error);
    }
  };
 
  const postProduct = async()=>{

    await axios.post(URL,query)
  }

  useEffect(() => {
   
   getProducts();
  
  }, [query])
  

  return (
    <>
    <div className="text-center mt-10  ">
      <input
        className="rounded-md border-red-400 p-3"
        type="search"
        name=""
        id=""
        placeholder="Search products"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
    </div>

    <div>
     {result?.map((item)=>(
      <p>{item.title}</p>
     ))}
    </div></>
  );
};

export default Products;
