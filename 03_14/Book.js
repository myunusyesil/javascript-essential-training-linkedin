class Book {
  constructor(name, author, publishHouse, pageCount, price, stockStatus, code) {
    this.name = name;
    (this.author = author),
      (this.publishHouse = publishHouse),
      (this.pageCount = pageCount),
      (this.price = price),
      (this.stockStatus = stockStatus),
      (this.code = code);
  }
  changeStockStatus(status) {
    this.status = status;
    console.log("you have changed the stock status: ", status);
  }
}

export default Book;
