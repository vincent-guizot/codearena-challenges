# Shopping Cart

## Problem

Create a class called `Cart` to manage products in a shopping cart.

Each product should have:

- `productCode`
- `quantity`

The `Cart` class must support the following operations.

---

## 1. Add Product

Create a method:

```javascript
addProduct(productCode, quantity);
```

### Rules

- If the product does **not** exist in the cart, add it.
- If the product already exists, increase its quantity.

### Example

```javascript
cart.addProduct("Red Apple", 2);
cart.addProduct("Red Apple", 3);
```

Result:

```javascript
[
  {
    productCode: "Red Apple",
    quantity: 5,
  },
];
```

---

## 2. Remove Product

Create a method:

```javascript
removeProduct(productCode);
```

### Rules

- Remove the product from the cart if it exists.
- If the product does not exist, do nothing.

### Example

```javascript
cart.removeProduct("Yellow Watermelon");
```

---

## 3. Display Cart

Create a method:

```javascript
displayCart();
```

### Output Format

```text
Green Banana (2)
Red Apple (5)
```

---

## 4. Sort Products

Create a method:

```javascript
sortProducts();
```

### Rules

- Sort all products alphabetically by `productCode`.

### Example

Before sorting:

```text
Yellow Watermelon
Green Banana
Red Apple
```

After sorting:

```text
Green Banana
Red Apple
Yellow Watermelon
```

---

## Example Usage

```javascript
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
```

---

## Expected Output

Before sorting:

```text
Green Banana (2)
Red Apple (7)
```

After sorting:

```text
Green Banana (2)
Red Apple (7)
```

---

## Constraints

- Product names are case-sensitive.
- Quantity is always a positive integer.
- Removing a product that does not exist should not throw an error.
- Duplicate products should be merged by increasing their quantity.

---

## Bonus Challenges

### 1. Get Total Products

Implement:

```javascript
getTotalProducts();
```

Return the total number of **unique products** in the cart.

Example:

```javascript
cart.getTotalProducts(); // 2
```

---

### 2. Clear Cart

Implement:

```javascript
clearCart();
```

Remove all products from the cart.

Example:

```javascript
cart.clearCart();
```

---

### 3. Update Quantity

Implement:

```javascript
updateQuantity(productCode, quantity);
```

### Rules

- Update the quantity of an existing product.
- If the product does not exist, do nothing.

Example:

```javascript
cart.updateQuantity("Red Apple", 10);
```

---

### 4. Find Product

Implement:

```javascript
findProduct(productCode);
```

Example:

```javascript
cart.findProduct("Red Apple");
```

Output:

```javascript
{
  productCode: "Red Apple",
  quantity: 10
}
```

---

## Difficulty

**Easy – Intermediate**

## Topics Covered

- JavaScript Classes
- Arrays
- Objects
- Object Manipulation
- CRUD Operations
- `forEach()`
- `filter()`
- `sort()`
