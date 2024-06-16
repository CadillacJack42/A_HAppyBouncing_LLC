import { useForm } from "react-hook-form";
import "../css/AdminCreateForm.css";
import { insertProduct } from "../services/fetch-utils";
// import { useProductList } from "../hooks/useProductList";

export const AdminCreateProductForm = () => {
  const { register, handleSubmit } = useForm();
  //   const { populateList } = useProductList();
  const onSubmit = (data) => {
    console.log(data);
    insertProduct(
      {
        name: data.name,
        dimensions: `H ${data.height} x W ${data.width} x L ${data.length}`,
        price: data.price,
        type: data.type,
        image: `https://eacxvvqcuinwmjcdqoja.supabase.co/storage/v1/object/public/product_images/${data.image[0].name}`,
      },
      data.image[0]
    ).then(() => document.getElementById("create-product-form").reset());
    //   .then(() => populateList());
  };
  return (
    <div className="admin-create-form-container">
      <form
        id="create-product-form"
        className="admin-create-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="name">
            Name of Product
          </label>
          <input name="name" id="name" {...register("name")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="height">
            Height of Product
          </label>
          <input name="height" id="height" {...register("height")} />
          <label className="create-input-label" htmlFor="width">
            Width of Product
          </label>
          <input name="width" id="width" {...register("width")} />
          <label className="create-input-label" htmlFor="length">
            Length of Product
          </label>
          <input name="length" id="length" {...register("length")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min={"0"}
            step={".01"}
            {...register("price")}
          />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="image">
            Select Image to Display
          </label>
          <input name="image" id="image" type="file" {...register("image")} />
        </span>

        <span className="create-input-label-span">
          <label className="create-input-label" htmlFor="type">
            Type of Product
          </label>
          <select name="type" id="type" {...register("type")}>
            <option value={"packages"}>Packages</option>
            <option value={"dry-bounce"}>Dry Bounce Houses</option>
            <option value={"wet-bounce"}>Wet Bounce Houses</option>
            <option value={"bulls"}>Mechanical Bulls</option>
            <option value={"seating"}>Tables & Chairs</option>
            <option value={"shade"}>Tents</option>
            <option value={"services"}>Services</option>
          </select>
        </span>

        <input type="submit" />
      </form>
    </div>
  );
};

// Something is close to being broken
