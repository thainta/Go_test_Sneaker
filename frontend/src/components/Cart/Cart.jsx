import React from "react";
import Card from "../UI/Card";
import nikeLogo from "../../assets/nike.png";
import CartList from "./CartList";
function Cart() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  let totPrice = 0;
  React.useEffect(() => {
    let retrievedObject = localStorage.getItem("cartItem");

    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        totPrice = totPrice + items[i].count * items[i].price;
      }
      setTotalPrice(totPrice);
    }
  }, []);

  window.addEventListener("storage", () => {
    let totPrice = 0;
    let retrievedObject = localStorage.getItem("cartItem");

    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        totPrice = totPrice + items[i].count * items[i].price;
      }
      setTotalPrice(totPrice);
    }
  });
  return (
    <Card>
      <div className="header my-[12px]">
        <div className="my-[12px]">
          <img className="w-[50px]" src={nikeLogo} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="content text-2xl font-[700]">Your Cart</div>
          <div className="text-2xl font-[700]">
            ${Math.round(totalPrice * 100) / 100}
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll no-scrollbar h-[30rem]">
        <CartList />
      </div>
    </Card>
  );
}

export default Cart;
