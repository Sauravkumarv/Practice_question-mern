import { createContext, useContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart with quantity check
  const addToCart = (itm) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itm.id);

      if (existing) {
        return prev.map((item) =>
          item.id === itm.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...itm, quantity: 1 }];
      }
    });
  };

  // Decrease quantity or remove if quantity 0
  const decreaseQuantity = (id) =>
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

  return (
    <cartContext.Provider value={{ cart, addToCart, decreaseQuantity }}>
      {children}
    </cartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(cartContext);
