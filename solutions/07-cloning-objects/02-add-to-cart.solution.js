/**
 * Add a new item to a shopping cart. You should deep copy any array and objects.
 * Solve this problem without a third-party library.
 * @param {Array} shoppingCart an array of objects
 * e.g. [{ name: "TV - 20ft", price: 1000000 }]
 * @param {*} newItem an object to add to the shopping cart array
 * e.g. { name: "Popcorn", price: 5 }
 *
 * @returns the *shoppingCart* array, with the object *newItem* added to it.
 * Both *shoppingCart* and *newItem* should be deep copied.
 *
 * @example
 * const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
 * const newItem = { name: "Popcorn", price: 5 };
 * const newShoppingCart = addToCart(shoppingCart, newItem);
 * console.log(newShoppingCart); // [{ name: "TV - 20ft", price: 1000000 }, { name: "Popcorn", price: 5 }]
 *
 * shoppingCart[0].price = 9000000; // This should not change newShoppingCart
 * newItem.price = 10; // This should not change newItem
 */
const addToCart = (shoppingCart, newItem) => {
  // WRITE YOUR ANSWER HERE

  // Solution 1: for loop
  let cart = shoppingCart.concat(newItem);
  for (let i = 0; i < cart.length; i++) {
    cart[i] = { ...cart[i] };
  }
  return cart;

  // Solution 2: for ... of loop
  let cart = [];
  for (let item of shoppingCart) {
    cart.push({ ...item });
  }
  cart.push({ ...newItem });
  return cart;
};

// IGNORE THIS BELOW. It is for the tests.

export { addToCart };
