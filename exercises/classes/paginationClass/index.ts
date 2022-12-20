class Pagination<T> {
	items: Array<T>;
	pageSize: number;
	totalPages: number;
	currentPage: number;

	constructor(items: Array<T>, pageSize: number) {
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
	}

	prevPage = (): Pagination<T> => {
		if (this.currentPage !== 1) {
			this.currentPage = this.currentPage - 1;
		}
		return this;
	};

	nextPage = (): Pagination<T> => {
		if (this.currentPage < this.totalPages) {
			this.currentPage = this.currentPage + 1;
		}
		return this;
	};

	firstPage = (): Pagination<T> => {
		this.currentPage = 1;
		return this;
	};

	lastPage = (): Pagination<T> => {
		this.currentPage = this.totalPages;
		return this;
	};

	goToPage = (page: number): Pagination<T> => {
		if (page <= this.totalPages && page > 0) {
			this.currentPage = page;
		}
		return this;
	};

	getVisibleItems = (): Array<T> => {
		const startIndex = (this.currentPage - 1) * this.pageSize;
		const endIndex = this.currentPage * this.pageSize;
		const visibleItems = this.items.slice(startIndex, endIndex);
		return visibleItems;
	};
}
