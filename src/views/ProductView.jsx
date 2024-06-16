import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../css/ProductView.css";
import { deleteProductById } from "../services/fetch-utils";
import { toast } from "react-hot-toast";

export const ProductView = ({ product, refresh }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const detailPage = new RegExp("^/detail/[0-9]*$");
  const isDetailPage = detailPage.test(location.pathname);
  const isAdminPage = location.pathname === "/admin" ? true : false;
  const handleClick = () => {
    !isDetailPage &&
      !isAdminPage &&
      navigate(`/detail/${product.id}`, { state: { product, cart } });
  };
  const handleAddCartItem = () => {
    addToCart(product);
  };
  const handleAdminItemDelete = () => {
    const imageNameSplit = product.image.split("/");
    // console.log("SPLIT IMAGE STRING", imageName[imageName.length - 1]);
    const image = imageNameSplit[imageNameSplit.length - 1];

    deleteProductById(product.id, image).then((res) =>
      toast.success("Item Deleted")
    );
    navigate("/admin");
  };
  return (
    <div className="product-view-card-container">
      <img
        onClick={() => handleClick()}
        className="product-view-card-image product-view-p"
        src={product.image}
        alt="Not Found"
      ></img>
      <p className="product-view-card-name product-view-p">{product.name}</p>
      <p className="product-view-card-description product-view-p">
        {product.description}
      </p>
      {isDetailPage && (
        <p className="product-view-card-price product-view-p">
          Dimensions: {product.dimensions}
        </p>
      )}
      <p className="product-view-card-price product-view-p">
        Price : ${product.price}
      </p>
      {isAdminPage && (
        <span>
          <button>Edit</button>
          <button onClick={() => handleAdminItemDelete()}>Delete</button>
        </span>
      )}
      {!isAdminPage && (
        <button
          className="add-to-cart-button"
          onClick={(e) => handleAddCartItem()}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
