import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductcCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  function addProduct(newProduct) {
    setProducts(prev => [...prev, newProduct]);
  }

  return (
    <div className="p-4">
      <h2>Loja Virtual</h2>

      <ProductForm addProduct={addProduct} />

      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="col-12 md:col-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}