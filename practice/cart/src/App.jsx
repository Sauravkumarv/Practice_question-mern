import React from "react";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
};

const App = () => {
  return (
    <CartProvider>
      <div style={styles.container}>
        <h1 style={styles.header}>🛒 Shop</h1>
        <Product />
      </div>
    </CartProvider>
  );
};

export default App;
