const products = [
  { name: "Shampo", price: 300, quantity: 2 },
  { name: "Chiruni", price: 100, quantity: 4 },
  { name: "Shirt", price: 500, quantity: 5 },
  { name: "Pant", price: 1200, quantity: 2 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisItemCost = product.price * product.quantity;
    total = total + thisItemCost;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log("Total shopping cost:", shoppingCost);
