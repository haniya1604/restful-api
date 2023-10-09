let Products = [
  { id: 1, title: "Candles", price: "500" },
  { id: 2, title: "Paints", price: "2000" },
  { id: 3, title: "Flowers", price: "5000" },
  { id: 4, title: "Colors", price: "600" },
];
module.exports = {
  getProducts: () => {
    return Products;
  },
  updateProduct: (id, data) => {
    const product = Products.find((p) => p.id === parseInt(id));
    if (!product) {
      return "The product with the given ID was not found.";
    } else {
      product.title = data.title;
      product.price = data.price;

      return product;
    }
  },
  deleteProduct: (id) => {
    const product = Products.find((p) => p.id === parseInt(id));
    if (!product) {
      return "The product with the given ID was not found.";
    } else {
      const index = Products.indexOf(product);
      Products.splice(index, 1);
      return product;
    }
  },
  addProduct: (data) => {
    const product = {
      id: Products.length + 1,
      title: data.title,
      price: data.price,
    };
    Products.push(product);
    return product;
  },
};
