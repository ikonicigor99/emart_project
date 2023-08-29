import "./App.css";
import { Home } from "./component/Home";
import { NavBar } from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./component/Products";
import { Product } from "./component/Product";
import { Cart } from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Checkout from "./component/CheckOut";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<Product />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
