import { getSavedCart } from "../utilities/fakedb";

export const productAndPrevCart = async () => {
  const res = await fetch("products.json");
  const products = await res.json();

  const prevCart = getSavedCart();

  const initialCart = [];
  for (const id in prevCart) {
    const savedItem = products.find((product) => product.id === id);
    if (savedItem) {
      savedItem.quantity = prevCart[id];
      initialCart.push(savedItem);
    }
  }

  return { products, initialCart };
};
