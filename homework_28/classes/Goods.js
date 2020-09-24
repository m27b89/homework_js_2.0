class Goods {
  constructor(name, amout, images, count) {
    this.name = name;
    this.amout = amout;
    this.images = images;
    this.count = count;
  }
  draw() {
    document.querySelector(
      ".out-4"
    ).innerHTML = `<div><img src="${this.images}" width="150"><p>${this.count}</p></div>`;
  }
}
