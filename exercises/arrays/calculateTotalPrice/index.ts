import Big from "big.js";

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
    acc = Number(
      Big(acc).plus(Big(product.quantity).times(Big(product.price)))
    );
    return acc;
  }, 0);
};

console.log(getTotalPrice(groceries));
