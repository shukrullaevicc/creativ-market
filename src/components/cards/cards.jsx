import axios from "../../api"

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";

import { AiFillStar } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';

import { addToCart } from "../../redux/slice/cartSlice";
import { addToFavorite } from "../../redux/slice/favoriteSlice";

const cards = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Load data
  useEffect(() => {
    async function loadData(){
      try{
        const response = await axios("/products");
        setProducts(response.data.products)
      }
      catch(error){
        console.log(error)
      }
    }

    loadData();
  }, []);

  // Render stars
  const renderStars = (rating) => {
    return Array.from({length: rating }, (_, index) => (
      <AiFillStar key={index} />
    ));
  };

  return (
  <div className='mt-40 flex flex-col gap-12 text-center'>
    <div className="container">
      <h1 className="text-3xl font-semibold text-gray-900">All Products</h1>
      <div className="grid grid-cols-4 gap-7 mt-14">
        {products.map((product) => (
          <div className='max-w-xs flex flex-col items-center justify-center gap-2 relative overflow-hidden group' key={product.id}>
            <div className="relative w-full transition-transform duration-300 transform group-hover:scale-110">
              <img src={product.images} alt="" className="w-full h-72 object-contain" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                <button onClick={() => dispatch(addToFavorite(product))} className='p-2 flex items-center justify-center rounded-full bg-white text-blue-600 border border-blue-600 hover:text-blue-800'>
                  <FaHeart />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-7 py-4">
              <h3 className="text-lg font-bold text-blue-800">{product.title}</h3>
              <p className="flex items-center justify-center gap-1 text-lg font-bold text-yellow-500">{renderStars(product.rating)}</p>
              <div className="w-full flex items-center justify-between gap-2">
                <p className="text-lg font-bold text-blue-400">${product.price}</p>
                <p className="text-sm font-normal line-through text-gray-500">${(product.price * 1.24).toFixed(2)}</p>
                <p className='text-sm font-bold text-pink-500'>24% OFF</p>
              </div>
              <button onClick={() => dispatch(addToCart(product))} className="relative cursor-pointer border-none py-1.5 px-2.5 rounded bg-blue-800 mt-2 text-white font-bold text-sm transition-all duration-300 ease-out transform hover:bg-blue-600 hover:scale-105 active:scale-95 active:bg-blue-700">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default cards