import "./App.css";
import { Nav } from "./routes/Nav";
import { Home } from "./routes/Home";
import { Admin } from "./routes/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { Detail } from "./routes/Detail";
import { CartProvider } from "./context/CartProvider";
import { Cart } from "./routes/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
