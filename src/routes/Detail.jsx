import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductView } from "../views/ProductView";
import "../css/Detail.css";

export const Detail = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state.product) {
      console.log("LOCATION STATE", location.state);
      setProduct(location.state.product);
    } else {
      console.log("NO PRODUCT IN LOCAL STORAGE");
    }
  }, [location.state]);

  return (
    <div className="detail-page-container">
      <h1>Detail Page</h1>
      <p>Product display with details and add to cart function</p>
      {product && <ProductView product={product} />}
    </div>
  );
};
