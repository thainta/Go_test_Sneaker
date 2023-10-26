import React from "react";

import trash from "../../assets/trash.png";
function CartItem(props) {
  const [count, setCount] = React.useState();

  React.useEffect(() => {
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          setCount(items[i].count);
          break;
        }
      }
    }
  }, []);
  const removeHandle = () => {
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      let index = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          index = i;
        }
      }
      if (index !== -1) {
        items.splice(index, 1);
      }
      localStorage.setItem("cartItem", JSON.stringify(items));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const plusHandle = () => {
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          items[i].count = items[i].count + 1;
        }
      }
      localStorage.setItem("cartItem", JSON.stringify(items));
      window.dispatchEvent(new Event("storage"));
    }

    setCount(count + 1);
  };
  const subHandle = () => {
    if (count - 1 === 0) {
      removeHandle();
    }
    setCount(count - 1);
    
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          items[i].count = items[i].count - 1;
        }
      }
      localStorage.setItem("cartItem", JSON.stringify(items));
      window.dispatchEvent(new Event("storage"));
    }
  };
  return (
    <div className="flex mt-[40px]">
      <div className="itemImg mr-[34px]">
        <div className="imgCont h-[90px] w-[90px] bg-amber-500 rounded-full">
          <div>
            <img
              className="w-[140%] max-w-xs h-auto ml-4 -translate-y-4 origin-bottom-left -rotate-[28deg] "
              src={props.data.image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="itemInfo flex flex-col w-full gap-y-2">
        <div className="name text-[14px] font-[700]">{props.data.name}</div>
        <div className="price text-[20px] font-[700]">${props.data.price}</div>
        <div className="flex justify-between mt-2">
          <div className="sl justify-between flex w-[50%]">
            <div
              className="cursor-pointer text-[16px] font-[700] w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#eee]"
              onClick={subHandle}
            >
              -
            </div>
            <div className="count">{count}</div>
            <div
              className="cursor-pointer text-[16px] font-[700] w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#eee]"
              onClick={plusHandle}
            >
              +
            </div>
          </div>
          <div
            className="cursor-pointer text-[16px] font-[700] w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#f6c90e]"
            onClick={removeHandle}
          >
            <img className="w-[16px]" src={trash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
