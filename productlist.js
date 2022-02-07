const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

//item_discounted item_sold_out  classes
//sold_out class for

function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("#item_template").content;

  //clone it
  const myClone = template.cloneNode(true);

  //change content

  myClone.querySelector(".item_name").textContent = product.productdisplayname;
  myClone.querySelector(".price").textContent = `DKK ${product.price},-`;
  myClone.querySelector(
    ".item img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  myClone.querySelector(".discount").textContent = `-${product.discount}%`;
  myClone.querySelector(".item img").alt = product.productdisplayname;

  if (product.soldout) {
    myClone.querySelector(".item").classList.add("item_sold_out");
  }
  if (product.discount) {
    myClone.querySelector(".item").classList.add("item_discounted");
    myClone.querySelector(".price").classList.add("new_price");
    myClone.querySelector(".new_price").textContent = `Now DKK ${
      product.price - (product.price / 100) * product.discount
    },-`;

    myClone.querySelector(
      ".old_price"
    ).textContent = `Was DKK ${product.price},-`;
  }

  /*<div class="discounted">  
                <p class="discount">-50%</p>  
                <p class="old_price">Prev. DKK 1000,-</p>
              </div>
              <div class="price"><span> Now </span> DKK 500,-</div> */

  //grab parent

  const parent = document.querySelector(".product_list");

  //append it

  parent.appendChild(myClone);
}
