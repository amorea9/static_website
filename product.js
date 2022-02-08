const url = "https://kea-alt-del.dk/t7/api/products/1164";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".card_name h1").textContent =
    product.productdisplayname;
  document.querySelector(
    ".card_img img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".card_img img").alt = product.productdisplayname;
  document.querySelector(".item_description").innerHTML = product.description;
  document.querySelector(".price").textContent = "DKK " + product.price + ",-";
  document.querySelector(".model_name").textContent = product.variantname;
  document.querySelector(".item_number").textContent = product.id;
  document.querySelector(".item_color").textContent =
    product.colour1 + " " + product.colour2;
  document.querySelector(".item_gender").textContent = product.gender;
  document.querySelector(".discount").textContent = `${product.discount}%`;
  document.querySelector(
    ".old_price"
  ).textContent = `Was DKK ${product.price},-`;
  // document.querySelector(".new_price").textContent = `Now DKK ${
  //   product.price - (product.price / 100) * product.discount
  // },-`;

  if (product.discount) {
    document.querySelector(".item_card").classList.add("item_discounted");
    document.querySelector(".price").classList.add("new_price");
    document.querySelector(".new_price").textContent = `Now DKK ${
      product.price - (product.price / 100) * product.discount
    },-`;

    document.querySelector(
      ".old_price"
    ).textContent = `Was DKK ${product.price},-`;
  }

  if (product.soldout) {
    document.querySelector(".item_card").classList.add("item_sold_out");
  }
}
