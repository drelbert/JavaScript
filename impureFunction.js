// impure function that mutates the originalCart object
// illustrating shared state
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity,
  });
  return cart;
};

//object
const originalCart = {
  items: [],
};

// invoking the addToCart
const newCart = addToCart(
  originalCart,
  {
    name: "Token",
    prove: "1000",
  },
  1
);

console.log(JSON.stringify(originalCart, undefined, 2));
