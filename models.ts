import * as jsonfile from "jsonfile";

class ProductCollection {
	async getAll() {
		return await jsonfile.readFile("./products.json");
	}

	async getById(id: number) {
		return (await this.getAll()).find((product) => product.id == id);
	}
}

export { ProductCollection };
