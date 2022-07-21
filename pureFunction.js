// pure addToCart() returns a new cart
// it does not mutate the original
const addToCart = (cart, item, quantity) => {
  return {
    ...cart,
    items: cart.items.concat([[item, quantity]]),
  };
};

const originalCart = {
  items: ["not mutated!"],
};

const newCart = addToCart(
  originalCart,
  {
    name: "Bike",
    price: "1000",
  },
  1
);

console.log(JSON.stringify(originalCart, undefined, 2));
