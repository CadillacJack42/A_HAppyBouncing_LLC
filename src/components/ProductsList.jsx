import { useEffect, useState } from "react";
import { ProductView } from "../views/ProductView";
import { getProducts } from "../services/fetch-utils";
import "../css/ProductsList.css";
export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      getProducts().then((res) => {
        console.log("RESPONSE FROM FETCH PRODUCTS", res);
        setProducts(res);
      });
    } catch (error) {
      console.log("ERROR IN PRODUCT FETCH", error);
    }
  }, []);

  return (
    <div className="products-list-tab">
      <h1>Products</h1>
      <label htmlFor="filter-dropdown-element">Filter Products: </label>
      <select
        name="product-filter"
        id="filter-dropdown-element"
        onChange={(e) => {
          console.log("THE FILTER HAS BEEN CHANGED TO: ", e.target.value);
          setFilter(e.target.value);
        }}
      >
        <option value={"all"}>All Products</option>
        <option value={"packages"}>Packages</option>
        <option value={"dry-bounce"}>Dry Bounce Houses</option>
        <option value={"wet-bounce"}>Wet Bounce Houses</option>
        <option value={"bulls"}>Mechanical Bulls</option>
        <option value={"seating"}>Tables & Chairs</option>
        <option value={"shade"}>Tents</option>
        <option value={"services"}>Services</option>
      </select>
      <div className="products-list-container">
        {products.length > 0 &&
          products.map((product) => {
            if (
              filter === "all" ||
              filter === undefined ||
              filter === product.type
            ) {
              return (
                <ProductView
                  key={product.id + "-" + product.name}
                  product={product}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
