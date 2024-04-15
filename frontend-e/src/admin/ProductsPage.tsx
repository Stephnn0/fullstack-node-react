import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const ProductsPage = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <div className="text-lg font-bold">Products</div>
        <Link to="/admin/products/create">
          <button
            className="bg-neutral-800 text-xs hover:bg-neutral-900 text-white px-3 py-1 rounded-md shadow-md"
            onClick={handleButtonClick}
          >
            Add Product
          </button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
