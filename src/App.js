import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Menu from "./pages/menu"
import Cart from "./pages/cart"
import SignUp from "./pages/signup"
import Login from "./pages/login"
import ProductDetail from "./pages/ProductDetails"
import NotFound from "./pages/notFound"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;