import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ({product}) => {
    const navigate = useNavigate()

    const {title,category,thumbnail,price} = product


  return (
    <p  className="group relative block overflow-hidden ">
   
  
    <img
      src={thumbnail}
      alt=""
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />
  
    <div className="relative border border-gray-100 bg-white p-6">
      <span className="whitespace-nowrap bg-purple-50 px-3 py-1.5 text-xs font-semibold"> {category} </span>
  
      <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1">{title}</h3>
  
      <p className="mt-1.5 text-lg text-gray-700 ">{price} $</p>
  
      <form className="mt-4">
        <button
          className="block w-full rounded bg-[#c45a7d] p-4 text-sm font-medium  text-white transition hover:scale-105"
          onClick={()=>navigate(`/dashboard/products/${title}?detail=${product.id}`,{state:product}) }
        >
          DETAİLS
        </button>
      </form>
    </div>
  </p>
  )
}

export default ProductCards