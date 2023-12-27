

import ProductCards from "../components/ProductCards";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";
import { useProducts } from "../context/ProductProvider";

const Products = () => {
 
  const {data,loading} = useProducts()

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="text-center mt-10  ">
        <SearchInput />
      </div>
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      {loading ? (
        <Loading />
      ) : data.length ? (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
    </div>
  );
};

export default Products;
