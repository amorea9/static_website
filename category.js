const url = "https://kea-alt-del.dk/t7/api/seasons";

// const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("template").content;

  //clone it
  const myClone = template.cloneNode(true);

  //change content
  myClone.querySelector(".season").textContent = product.season;
  myClone
    .querySelector(".alink")
    .setAttribute("href", `productlist.html?season=${product.season}`);
  // myClone.querySelector(
  //   ".alink img"
  // ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //grab parent
  const parent = document.querySelector(".categories");

  //append it

  parent.appendChild(myClone);
}
