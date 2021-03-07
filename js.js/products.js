let products = [
    { name: "банан", qnt: 10, status: "unbought" },
    { name: "клубника", qnt: 5, status: "unbought" },
    { name: "киви", qnt: 10, status: "unbought" },
    { name: "хлеб", qnt: 2, status: "bought" },
    { name: "молоко", qnt: 2, status: "bought", },
    { name: "масло", qnt: 2, status: "bought" },
    { name: "яйца", qnt: 30, status: "bought" },
    { name: "рыба", qnt: 3, status: "bought" },
    { name: "ананас", qnt: 2, status: "unbought" },
    { name: "яблоко", qnt: 15, status: "unbought" },
  ];
  

const sortProducts = (products) => {
    const unbought = [];
    const bought = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].status === "unbought") {
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
      status: "unbought",
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
    findedProduct.status = "bought";
  } else {
    console.error("Cannot find product");
  }

  return products;
}

buyProduct("meat");
buyProduct("ананас");
buyProduct("buckweat");

console.log(products);