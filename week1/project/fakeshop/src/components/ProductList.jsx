import React from "react";
import useCategoryStore from "../useCategoryStore";
import products from "../fake-data/all-products";

function ProductList() {
  const { selectedCategory } = useCategoryStore();
  console.log("its selectedCategory:", selectedCategory);

  const filteredProducts = { selectedCategory }
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  console.log("Filtered Products:", typeof filteredProducts, filteredProducts); // Debugging step

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))
      ) : (
        <p>no item found.</p>
      )}
    </div>
  );
}

export default ProductList;
