const addToDb = (id) => {
  /* {
        id:1,
        id:2,
    } */
  const shoppingCart = getSavedCart();
  if (shoppingCart[id]) {
    shoppingCart[id]++;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getSavedCart = () => {
  let shoppingCart = {};
  const savedCart = localStorage.getItem("shopping-cart");
  if (savedCart) {
    shoppingCart = JSON.parse(savedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { getSavedCart, addToDb, removeFromDb };

// // use local storage to manage cart data
// const addToDb = id =>{
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }

//     // add quantity
//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else{
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     deleteShoppingCart
// }
