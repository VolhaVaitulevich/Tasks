interface IMenu {
	item: string;
	type: 'drink' | 'food';
	price: number;
}

export class CoffeeShop {
	name: string;
	menu: Array<IMenu>;
	orders: Array<String>;

	constructor(name: string, menu: Array<IMenu>, orders: Array<String>) {
		this.name = name;
		this.menu = menu;
		this.orders = [...orders];
		this.addOrder = this.addOrder.bind(this);
		this.fulfillOrder = this.fulfillOrder.bind(this);
		this.listOrders = this.listOrders.bind(this);
		this.dueAmount = this.dueAmount.bind(this);
		this.cheapestItem = this.cheapestItem.bind(this);
		this.drinksOnly = this.drinksOnly.bind(this);
		this.foodOnly = this.foodOnly.bind(this);
	}

	addOrder(orderName: string): string {
		let addResult = '';
		if (this.menu.find(menuObject => menuObject.item === orderName)) {
			this.orders.push(orderName);
			addResult = 'Order added';
		} else {
			addResult = 'This item is currently unavailable!';
		}
		return addResult;
	}

	fulfillOrder(): string {
		let fulfillResult = '';
		if (this.orders.length === 0) {
			fulfillResult = 'All orders have been fulfilled!';
		} else {
			fulfillResult = `The ${this.orders.shift()} have been fulfilled`;
		}
		return fulfillResult;
	}

	listOrders(): Array<String> {
		return this.orders;
	}

	dueAmount(): number {
		const dueOrderAmount = this.orders.reduce((totalOrderPrice, orderItem) => {
			return (totalOrderPrice +=
				this.menu.find(menuObject => menuObject.item === orderItem)?.price ??
				0);
		}, 0);
		return dueOrderAmount;
	}

	cheapestItem(): IMenu | {} {
		const minPrice = this.menu.reduce(
			(min, menuObject) => (menuObject.price < min ? menuObject.price : min),
			this.menu[0].price,
		);
		const minPriceItem: IMenu | {} =
			this.menu.find(menuObject => menuObject.price === minPrice)?.item ?? {};
		return minPriceItem;
	}

	drinksOnly(): String[] {
		const listOfDrinks = this.menu
			.filter(menuObject => menuObject.type === 'drink')
			.map(menuObject => menuObject.item);
		return listOfDrinks;
	}

	foodOnly(): String[] {
		const listOfFood = this.menu
			.filter(menuObject => menuObject.type === 'food')
			.map(menuObject => menuObject.item);
		return listOfFood;
	}
}
