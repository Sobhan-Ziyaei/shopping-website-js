class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  createCard(data) {
    const cardElement = document.createElement("div");
    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.alt;

    cardElement.appendChild(img);

    const info = document.createElement("div");
    const productName = document.createElement("h3");
    const control = document.createElement("div");

    this.parent.appendChild(cardElement);
  }
}

export default Products;
