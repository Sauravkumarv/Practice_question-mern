import React from "react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

// ✅ CSS objects
const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fefefe",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#fff",
  },
  button: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

const Product = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, name: "Atta" },
    { id: 2, name: "Dal" },
    { id: 3, name: "Chawal" },
    { id: 4, name: "Sabji" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Products</h2>
      <ul style={styles.list}>
        {items.map((itm) => (
          <li key={itm.id} style={styles.listItem}>
            <span>
              {itm.id}: {itm.name}
            </span>
            <button style={styles.button} onClick={() => addToCart(itm)}>
              Add
            </button>
          </li>
        ))}
      </ul>

      {/* Cart component */}
      <Cart />
    </div>
  );
};

export default Product;
