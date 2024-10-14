import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Compoent/Fotter";
import Header from "./Compoent/Header";

import SingleProduct from "./Compoent/SingleProduct";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<SingleProduct />} />{" "}
        </Routes>

        <FloatingWhatsApp
          phoneNumber="+919799491249"
          accountName="Peenak Overseas"
          statusMessage="How can I help you"
        />

        <Footer />
      </Router>
    </>
  );
}

export default App;
