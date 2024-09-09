const products = [
  { name: "Shampo", price: 300 },
  { name: "Chiruni", price: 100 },
  { name: "Shirt", price: 500 },
  { name: "Pant", price: 1200 },
];

function getShoppingTotal(products) {
  total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}

const soppingTotal = getShoppingTotal(products);
console.log("total cost:", soppingTotal);
