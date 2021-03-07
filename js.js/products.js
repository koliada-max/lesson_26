let products = [
    { name: "banana", qnt: 10, status: "false" },
    { name: "strawberry", qnt: 5, status: "false" },
    { name: "kiwi", qnt: 10, status: "false" },
    { name: "bread", qnt: 2, status: "true" },
    { name: "milk", qnt: 2, status: "true", },
    { name: "butter", qnt: 2, status: "true" },
    { name: "eggs", qnt: 30, status: "true" },
    { name: "fish", qnt: 3, status: "true" },
    { name: "pineapple", qnt: 2, status: "false" },
    { name: "apple", qnt: 15, status: "false" },
  ];
  

const sortProducts = (products) => {
    const unbought = [];
    const bought = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].status === "false") {
          unbought.push(products[i]);
        } else {
          bought.push(products[i]);
      }
    }

    return unbought.concat(bought);
}

console.log(sortProducts(products));

const addProduct = (productName) => {
  const findedProduct = products.find(product => product.name === productName);

  if (findedProduct) {
    findedProduct.qnt += 1;
  } else {
    products.push({
      name: productName,
      qnt: 1,
      status: "false",
    });
  }

  return products;
}

 addProduct("meat");
 addProduct( "grape");
 addProduct( "meat");

console.log(products);

const buyProduct = (productName) => {
  const findedProduct = products.find((product) => product.name === productName);

  if (findedProduct) {
    findedProduct.status = "true";
  } else {
    console.error("Cannot find product");
  }

  return products;
}

buyProduct("meat");
buyProduct("pineapple");
buyProduct("buckweat");

console.log(products);