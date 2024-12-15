import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingBag from "./components/ShoppingBag";
import ClothesList from './components/ClothesList'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/ShoppingBag" element={<ShoppingBag />} />
        </Routes>
        <ClothesList></ClothesList>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;





