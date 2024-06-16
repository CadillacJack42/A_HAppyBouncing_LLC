import "./App.css";
import Login from "./auth/Login";
import { Nav } from "./routes/Nav";
import { Cart } from "./routes/Cart";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Admin } from "./routes/Admin";
import Register from "./auth/Register";
import { Detail } from "./routes/Detail";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { useEffect, useState } from "react";

function App() {
  const { user } = useUser();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (user?.role === "authenticated") {
      setAdmin(true);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <CartProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={admin ? <Admin /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
