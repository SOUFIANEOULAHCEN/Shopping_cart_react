import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ShoppingBag from "./components/ShoppingBag";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ClothesList from "./components/ClothesList";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />}  /> */}
          <Route path="/ShoppingBag" element={<ShoppingBag />} />
          {/* <Route path="/" element={<Header />}  /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Header /> */
}
{
  /* <Card /> */
}

{
  /* <Footer /> */
}
// <ShoppingBag />
{
  /* <ClothesList></ClothesList> */
}




