const groceries = [
  { product: "Chocolate", quantity: 1, price: 0.1 },
  { product: "Lollipop", quantity: 1, price: 0.2 },
];

interface IGrocerie {
  product: string;
  quantity: number;
  price: number;
}

const getTotalPrice = (groceries: Array<IGrocerie>): number => {
  return groceries.reduce((acc: number, product): number => {
    acc += product.quantity * product.price;
    return +acc.toFixed(2);
  }, 0);
};

console.log(getTotalPrice(groceries));
