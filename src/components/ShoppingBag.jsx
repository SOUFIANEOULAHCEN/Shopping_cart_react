import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
function ShoppingBag() {
    const [show , setShow] =useState(true);
  return (
        show && (
            <div className="w-[50%] absolute right-0 h-auto px-[10%] py-[5%] shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Shopping Bag <span className="font-normal text-sm">(2 items)</span>
        </h1>
        <button className="font-bold hover:text-xl transition-all duration-300" onClick={()=>{setShow(false)}}>
          X
        </button>
      </div>
      <div className="w-full border border-gray-300 my-2"></div>
      <div>
        <ul className="flex flex-col justify-center items-center gap-3 h-auto" >
          <li className="grid grid-cols-[1fr_3fr] gap-2 h-[150px] ">
            <div className="w-full h-[100%] ">
              <img
              className="object-cover rounded-sm w-full h-[100%]"
                src="https://cdn1.ozone.ru/s3/multimedia-e/6827348858.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="">
                <h3 className="font-bold text-lg">Vote New Shirt</h3>
                <p className="text-sm font-semibold">13.99 dh</p>
              </div>
              <div className="flex justify-between pr-4"> 
                <div className="flex gap-1">
                  <button className="text-gray-900 hover:text-gray-100 px-3 py-1 rounded-md hover:bg-gray-700 transition-all ease-in duration-300 shadow-md">+</button>
                  <span className="text-gray-900 px-3 py-1 shadow-md">1</span>
                  <button className="text-gray-900 hover:text-gray-100 px-3 py-1 rounded-md hover:bg-gray-700 transition-all ease-in duration-300 shadow-md">-</button>
                </div>
                <button className="px-3 py-1 rounded-sm shadow-md hover:text-xl duration-300 ease-in transition-all">
                  <FaTrash />
                </button>
              </div>
            </div>
          </li>
        </ul>

      </div>
      <div className="w-full px-6 py-3 bg-gray-800 text-gray-100 mt-2 text-center text-xl ">Check out</div>
    </div>
        )
    
  );
}

export default ShoppingBag;
