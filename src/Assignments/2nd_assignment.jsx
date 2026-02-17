import React, { useState } from "react";

function ProductAssignmentUI() {
  // 15 Products (Better for UX testing)
  const initialProducts = [
    { id: 1, name: "iPhone 15", category: "Electronics" },
    { id: 2, name: "Samsung Galaxy S23", category: "Electronics" },
    { id: 3, name: "Sony Headphones", category: "Electronics" },
    { id: 4, name: "Dell Laptop", category: "Electronics" },
    { id: 5, name: "Apple Watch", category: "Electronics" },

    { id: 6, name: "Nike Shoes", category: "Fashion" },
    { id: 7, name: "Adidas T-Shirt", category: "Fashion" },
    { id: 8, name: "Levi's Jeans", category: "Fashion" },
    { id: 9, name: "Puma Jacket", category: "Fashion" },
    { id: 10, name: "Ray-Ban Sunglasses", category: "Fashion" },

    { id: 11, name: "Wooden Table", category: "Furniture" },
    { id: 12, name: "Office Chair", category: "Furniture" },
    { id: 13, name: "Queen Bed", category: "Furniture" },
    { id: 14, name: "Bookshelf", category: "Furniture" },
    { id: 15, name: "Sofa Set", category: "Furniture" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categoryChangeHandler = (e) => {
    const filteredProducts = [];
    for (const product of initialProducts) {
      if (product.category === e.target.value || e.target.value === "All") {
        filteredProducts.push(product);
      }
    }
    setCategory(e.target.value);
    setProducts(filteredProducts);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Product List</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
        }}
      />

      {/* 🗂 Category Filter */}
      <select
        value={category}
        onChange={categoryChangeHandler}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px",
        }}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Furniture">Furniture</option>
      </select>

      {/* 📦 Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductAssignmentUI;