import ProductData from "./ProductData";
import Card from "./Card";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
export default function ClothesList() {
  const [CurrentPage, SetCurrentPAge] = useState(1); // Page courante
  const NmbreItems = 8; // Nombre de produits par page
  const StartIndex = (CurrentPage - 1) * NmbreItems;
  const CurrentProducts = ProductData.slice(
    StartIndex,
    StartIndex + NmbreItems
  );
  return (
    <div className="px-[10%] py-4">
      <div className="grid grid-cols-4  gap-3">
        {CurrentProducts.map((pro, i) => (
          <Card key={i} pro={pro} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-3 gap-4">
        <button
          onClick={() =>
            SetCurrentPAge((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={CurrentPage === 1}
          className={`p-2 rounded-full hover:bg-gray-300 transition duration-200 shadow-md hover:shadow-lg ${
            CurrentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaAngleLeft
            className="text-gray-600 hover:text-gray-800"
            size={25}
          />
        </button>
        <button
          onClick={() =>
            SetCurrentPAge((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(ProductData.length / NmbreItems))
            )
          }
          disabled={CurrentPage === Math.ceil(ProductData.length / NmbreItems)}
          className={`p-2 rounded-full hover:bg-gray-300 transition duration-200 shadow-md hover:shadow-lg ${
            CurrentPage === Math.ceil(ProductData.length / NmbreItems)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <FaAngleRight
            className="text-gray-600 hover:text-gray-800"
            size={25}
          />
        </button>
      </div>
    </div>
  );
}
