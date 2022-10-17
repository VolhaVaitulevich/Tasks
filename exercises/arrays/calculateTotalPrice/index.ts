const groceries = [
  { product: "Chocolate", quantity: 1, price: 0.1 },
  { product: "Lollipop", quantity: 1, price: 0.2 },
];

const getTotalPrice = (groceries: Record<string, any>[]): number => {
  return groceries.reduce(
    (acc: number, products: Record<string, number>): number => {
      acc += products.quantity * products.price;
      return +acc.toFixed(2);
    },
    0
  );
};

console.log(getTotalPrice(groceries));
