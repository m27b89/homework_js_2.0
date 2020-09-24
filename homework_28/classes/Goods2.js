class Goods2 extends Goods {
  constructor(name, maunt, images, count, sale) {
    super(name, maunt, images, count);
    this.sale = sale;
  }
  draw() {
    let ad = "";
    if (this.sale) {
      ad = "Расспродажа";
    } else {
      ad = "CLOSE";
    }
    document.querySelector(
      ".out-6"
    ).innerHTML = `<div><img src="${this.images}" width="150"/><p>${this.count}</p></div>`;
  }
}
