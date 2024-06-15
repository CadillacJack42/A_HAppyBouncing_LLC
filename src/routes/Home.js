// import "../css/Home.css";
// import { Contact } from "./Contact";
// import { OrderForm } from "./OrderForm";
import { useState } from "react";
import { ProductsList } from "../components/ProductsList";
import { Tabs } from "../components/Tabs";
import { Cart } from "./Cart";
// import { Cart } from "./Cart";

export const Home = () => {
  //   const [products, setProducts] = useState([]);
  //   const [filter, setFilter] = useState("all");

  const home = {
    tabs: ["Products", "Custom", "Contact", "Cart"],
    // content: [<ProductsList />, <OrderForm />, <Contact />, <Cart />],
    content: [<ProductsList />, <ProductsList />, <ProductsList />, <Cart />],
  };

  return (
    <div className="home-container">
      <Tabs page={home} />
    </div>
  );
};
