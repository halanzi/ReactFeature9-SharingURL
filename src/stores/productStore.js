import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
      updateProduct: action,
      fetchProduct: action,
    });
  }
  createProduct = async (newProduct) => {
    // product.id = this.products[this.products.length - 1].id + 1;
    // product.slug = slugify(product.name);
    // this.products.push(product);
    try {
      const res = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(res.data);
    } catch (error) {
      console.log("ProductStore -> createProduct -> error", error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => productId !== product.id
      );
    } catch (error) {
      console.log("ProductStore -> deleteProduct -> error", error);
    }
  };

  updateProduct = async (productUpdate) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${productUpdate.id}`,
        productUpdate
      );
      const product = this.products.find(
        (product) => product.id === productUpdate.id
      );
      for (const key in product) product[key] = productUpdate[key];
    } catch (error) {
      console.log("ProductStore -> productUpdate -> error", error);
    }
  };

  fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("ProductStore -> fetchProduct -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProduct();

export default productStore;
