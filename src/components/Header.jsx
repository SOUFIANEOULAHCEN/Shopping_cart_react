import { MdSearch, MdShoppingCart } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import Slide from "./Slide";
export default function Header() {
  return (
    <header className="w-full h-auto bg-gray-50 text-gray-900">
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-100">
        <div className="flex justify-between items-center gap-4 lg:w-[80%] sm:w-[95%] md:w-[95%] mx-auto h-[50px] ">
          <div className="">
            <img
              className="w-[40px] mix-blend-multiply"
              src="https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-odezhda-png-17.png"
              alt=""
            />
          </div>
          <nav className="flex gap-4 text-sm">
            <Link
              to="/"
              className="hover:text-gray-500 duration-150 transition-colors"
            >
              New
            </Link>

            <Link
              to="/"
              className="hover:text-gray-500 duration-150 transition-colors"
            >
              Kids
            </Link>
            <Link
              to="/"
              className="hover:text-gray-500 duration-150 transition-colors"
            >
              Accessoires
            </Link>
            <Link
              to="/"
              className="hover:text-gray-500 duration-150 transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/"
              className="hover:text-gray-500 duration-150 transition-colors"
            >
              Sale
            </Link>
          </nav>
          <div className="flex justify-between gap-2 text-xl">
            {/* <MdSearch /> */}
            <div className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">
              <MdSearch size={24} />
            </div>
            <Link to="/ShoppingBag">
              {" "}
              <div className="relative hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                <span className="bg-red-600 absolute w-3 h-3 rounded-full right-0 "></span>
                <MdShoppingCart size={24} />
              </div>
            </Link>
            <div className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">
              <IoMdPerson size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] relative overflow-hidden relative mt-[50px] ">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h1 className="font-bold text-4xl mb-2">New Arrivals</h1>
          <p className="leading-tight text-lg">
            Discover our latest collection of stylish and comfortable clothing.
          </p>
        </div>
        <div className="w-full h-full">
          <Slide />
        </div>
      </div>
    </header>
  );
}
