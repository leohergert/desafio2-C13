import { ProductCollection } from "./models";

class ProductController {
	productos: ProductCollection;
	constructor() {
		this.productos = new ProductCollection();
	}

	async processOptions(opciones) {
		if (typeof opciones.search == typeof 1) {
			return await this.productos.getById(opciones.search);
		} else {
			return await this.productos.getAll();
		}
	}
}
export { ProductController };
