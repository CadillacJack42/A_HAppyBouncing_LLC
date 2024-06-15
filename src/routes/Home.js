import { ProductsList } from "../components/ProductsList";
import { Tabs } from "../components/Tabs";
import { Cart } from "./Cart";
import { About } from "./About";

export const Home = () => {
  const home = {
    tabs: ["Products", "Contact", "Cart"],
    content: [<ProductsList />, <About />, <Cart />],
  };

  return (
    <div className="home-container">
      <Tabs page={home} />
    </div>
  );
};
