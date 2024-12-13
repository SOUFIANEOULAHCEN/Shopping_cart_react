import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <footer className="px-[10%] pt-[5%] pb-4 bg-gray-100 ">
      <div className="grid grid-cols-[1fr_2fr] gap-6">
        {/* email part */}
        <div>
          <h1 className="font-bold text-xl mb-4">Brand</h1>
          <h2 className="font-semibold text-sm mb-1">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            iste?
          </p>
          <div className="flex items-center">
            <input
              className="bg-gray-50 px-3 py-1"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-gray-800 text-gray-50 rounded-sm px-3 py-2 ">
              <IoSend />
            </button>
          </div>
        </div>
        {/* links part */}
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] ">
          {/* links 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm">Company</h3>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">About us</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Blog</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Careers</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Our team</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Help center</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Outkets</li>
            </ul>
          </div>
          {/* links 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm">Shop</h3>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Gift Cards</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Our Products</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">My Accounts</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Shipping</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Returns</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Rewards</li>
            </ul>
          </div>
          {/* links 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm">Support</h3>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Contact us</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Payment Options</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Store Locator</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Accessibility</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Affiliats</li>
            </ul>
          </div>
          {/* links 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm">FAQ</h3>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm"> Rewrda FAQ</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Product Care</li>
              <li className="hover:text-gray-500 transition-colors duration-150 text-sm">Size Guide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-7">
        <div className="text-sm">
          {" "}
          <p>&copy; 2024 All rights reserved.Designed by brand</p>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <p className="text-sm">payment parteners</p>
          <div className="flex space-x-2 justify-center items-center">
            <img
              className="w-[40px] h-[40px] object-contain mix-blend-multiply"
              src="https://www.saintlad.com/wp-content/uploads/2022/05/PayPal-Not-Working-3.png"
              alt="paypal"
            />
            <img
              className="w-[40px] h-[40px] object-contain mix-blend-multiply"
              src="https://usa.visa.com/dam/VCOM/blogs/visa-logo-white-on-blue-800x450.png"
              alt="visa"
            />
            <img
              className="w-[40px] h-[40px] object-contain mix-blend-multiply"
              src="https://artsmile.by/assets/images/carts/mastercard.png"
              alt="master card"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
