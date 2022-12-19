class Pagination {
	items: Array<any>;
	pageSize: number;
	totalPages: number;
	currentPage: number;

	constructor(items: Array<any>, pageSize: number) {
		if (items) {
			this.items = items;
		} else {
			this.items = [];
		}

		if (pageSize) {
			this.pageSize = pageSize;
		} else {
			this.pageSize = 10;
		}

		if (this.items.length > 0 && this.items !== undefined) {
			this.totalPages = Math.ceil(this.items.length / pageSize);
		} else {
			this.totalPages = 1;
		}
		this.currentPage = 1;

		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.firstPage = this.firstPage.bind(this);
		this.lastPage = this.lastPage.bind(this);
		this.getVisibleItems = this.getVisibleItems.bind(this);
		this.goToPage = this.goToPage.bind(this);
	}

	prevPage() {
		if (this.currentPage !== 1) {
			this.currentPage = this.currentPage - 1;
		}
	}

	nextPage() {
		if (this.currentPage < this.totalPages) {
			this.currentPage = this.currentPage + 1;
		}
	}

	firstPage() {
		this.currentPage = 1;
	}

	lastPage() {
		this.currentPage = this.totalPages;
	}

	goToPage(page: number) {
		if (page <= this.totalPages && page > 0) {
			this.currentPage = page;
		}
	}

	getVisibleItems() {
		const startIndex = (this.currentPage - 1) * this.pageSize;
		const endIndex = this.currentPage * this.pageSize;
		console.log(this.items.slice(startIndex, endIndex));
	}
}
