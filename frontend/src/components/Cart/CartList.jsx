import React from "react";
import CartItem from "./CartItem";

function CartList() {
  const [cartItems, setCartItems] = React.useState([]);

  let totPrice = 0;
  React.useEffect(() => {
    let retrievedObject = localStorage.getItem("cartItem");
    setCartItems(JSON.parse(retrievedObject));
  }, []);
  window.addEventListener("storage", () => {
    let retrievedObject = localStorage.getItem("cartItem");
    setCartItems(JSON.parse(retrievedObject));
    // ...
  });
  return (
    <div>
      {cartItems && cartItems.length !== 0 ? (
        cartItems.map((item) => <CartItem key={item.id} data={item} />)
      ) : (
        <div>Your cart is empty.</div>
      )}
    </div>
  );
}

export default CartList;
