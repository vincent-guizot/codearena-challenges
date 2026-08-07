class Cart {
  // code here
}

const cart = new Cart();

cart.addProduct("Green Banana", 2);
cart.addProduct("Yellow Watermelon", 3);
cart.addProduct("Red Apple", 1);
cart.addProduct("Red Apple", 4);
cart.addProduct("Red Apple", 2);

cart.removeProduct("Yellow Watermelon");
cart.removeProduct("Red Watermelon");

cart.displayCart();

cart.sortProducts();

cart.displayCart();
