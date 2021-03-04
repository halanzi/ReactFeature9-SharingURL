import products from "../products";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
    });
  }
  createProduct = (product) => {
    product.id = products[products.length - 1].id + 1;
    product.slug = slugify(product.name);
    this.products.push(product);
  };

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => productId !== product.id);
  };
}

const productStore = new ProductStore();
export default productStore;
