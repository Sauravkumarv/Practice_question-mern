import React from "react";
import { useCart } from "../context/CartContext";

// ✅ CSS objects
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
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
  quantity: {
    marginRight: "10px",
    fontWeight: "bold",
  },
  button: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    cursor: "pointer",
  },
};

const Cart = () => {
  const { decreaseQuantity, cart } = useCart();

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is Empty</p>
      ) : (
        <ul style={styles.list}>
          {cart.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span>{item.name}</span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={styles.quantity}>({item.quantity})</span>
                <button
                  style={styles.button}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
