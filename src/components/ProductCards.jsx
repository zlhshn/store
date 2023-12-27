import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ({product}) => {
    const navigate = useNavigate()

    const {title,category,thumbnail,price} = product

  // const getDetailData = async () => {
  //   const {data} = await axios(`https://dummyjson.com/products/${search.split("=")[1]}`)//!url den gelen search deki değerin tek olduğunu bildiğimiz için bu şekilde id bilgisini yakaladık.Eğer url de birden fazla parametre olursa o zaman ona göre bir ayıklama yapmamız lazım.
  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getDetailData()
  // },[])

  return (
    <div className="cursor-pointer" onClick={()=>navigate(`/dashboard/products/${title}?detail=${product.id}`,{state:product}) }>
    <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
      <img
        src={thumbnail}
        alt={title}
        title={title}
        className="h-[200px] w-full object-fit lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div className="flex-1">
        <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{price} $</p>
    </div>
  </div>
  )
}

export default ProductCards