interface IMenu {
	item: string;
	type: string;
	price: number;
}

export class CoffeeShop {
	name: string;
	menu: Array<[string, string, number]>;
	orders: Array<String>;

	constructor(
		name: string,
		menu: Array<[string, string, number]>,
		orders: Array<String>,
	) {
		this.name = name;
		this.menu = JSON.parse(JSON.stringify(menu));
		this.orders = [...orders];
		this.addOrder = this.addOrder.bind(this);
		this.fulfillOrder = this.fulfillOrder.bind(this);
		this.listOrders = this.listOrders.bind(this);
		this.dueAmount = this.dueAmount.bind(this);
		this.cheapestItem = this.cheapestItem.bind(this);
		this.drinksOnly = this.drinksOnly.bind(this);
		this.foodOnly = this.foodOnly.bind(this);
		this.createMenuArrOfObj = this.createMenuArrOfObj.bind(this);
	}

	addOrder(orderName: string): void {
		const menuArrOfObj = this.createMenuArrOfObj();

		//check if this item exists in menu
		if (menuArrOfObj.find(menuObject => menuObject.item === orderName)) {
			this.orders.push(orderName);
			console.log('Order added');
		} else {
			console.log('This item is currently unavailable!');
		}
	}

	fulfillOrder(): void {
		if (this.orders.length === 0) {
			console.log('All orders have been fulfilled!');
		} else {
			console.log(`The ${this.orders.shift()} have been fulfilled`);
		}
	}

	listOrders(): void {
		console.log(this.orders);
	}

	dueAmount(): void {
		const menuArrOfObj = this.createMenuArrOfObj();

		console.log(
			Math.round(
				this.orders.reduce((totalOrderPrice, orderItem) => {
					return (totalOrderPrice +=
						menuArrOfObj.find(menuObject => menuObject.item === orderItem)
							?.price ?? 0);
				}, 0),
			),
		);
	}

	cheapestItem(): void {
		const menuArrOfObj = this.createMenuArrOfObj();

		//find minimal praice among all menu items
		const minPrice = menuArrOfObj.reduce(
			(min, menuObject) => (menuObject.price < min ? menuObject.price : min),
			menuArrOfObj[0].price,
		);
		console.log(
			menuArrOfObj.find(menuObject => menuObject.price === minPrice)?.item,
		);
	}

	drinksOnly(): void {
		const menuArrOfObj = this.createMenuArrOfObj();
		console.log(
			menuArrOfObj
				.filter(menuObject => {
					if (menuObject.type === 'drink') {
						return menuObject.item;
					}
				})
				.map(menuObject => menuObject.item),
		);
	}

	foodOnly(): void {
		const menuArrOfObj = this.createMenuArrOfObj();
		console.log(
			menuArrOfObj
				.filter(menuObject => {
					if (menuObject.type === 'food') {
						return menuObject.item;
					}
				})
				.map(menuObject => menuObject.item),
		);
	}

	createMenuArrOfObj(): Array<IMenu> {
		return this.menu.map((menuItem: [string, string, number]) => ({
			item: menuItem[0],
			type: menuItem[1],
			price: menuItem[2],
		}));
	}
}
