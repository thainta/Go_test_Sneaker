import React from "react";
import check from "../../assets/check.png";
function ProductItem(props) {
  const [isAddToCart, setIsAddToCart] = React.useState(false);

  React.useEffect(() => {
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          setIsAddToCart(true);
        }
      }
    }
  }, []);

  const addToCartHandle = () => {
    props.data["count"] = 1;
    setIsAddToCart(true);
    var retrievedObject = localStorage.getItem("cartItem");
    if (!retrievedObject) {
      localStorage.setItem("cartItem", JSON.stringify([props.data]));
    } else {
      let items = JSON.parse(retrievedObject);
      items[Object.keys(items).length] = props.data;
      localStorage.setItem("cartItem", JSON.stringify(items));
    }
    window.dispatchEvent(new Event("storage"));
  };

  window.addEventListener("storage", () => {
    setIsAddToCart(false);
    let retrievedObject = localStorage.getItem("cartItem");
    if (retrievedObject) {
      let items = JSON.parse(retrievedObject);
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === props.data.id) {
          setIsAddToCart(true);
        }
      }
    }
  });

  return (
    <React.Fragment>
      <div className="mb-[40px]">
        <div className={`itemImg bg-[#e1e7ed] rounded-[30px]`}>
          <img
            className="origin-center -rotate-[24deg] -ml-[16px] "
            src={props.data.image}
            alt=""
          />
        </div>
        <div className="itemName text-[20px] font-[700] mt-[26px] mb-[20px]">
          {props.data.name}
        </div>
        <div className="itemDescription text[13px] mb[20px] text-[#777] mb-[20px]">
          {props.data.description}
        </div>
        <div className="shopButton flex justify-between items-center">
          <div className="price text-[18px] font-[700]">
            ${props.data.price}
          </div>
          {isAddToCart ? (
            <div className="text-[16px] font-[700] w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#f6c90e]">
              <img className="w-[16px]" src={check} alt="" />
            </div>
          ) : (
            <div
              className="buyBtn flex items-center cursor-pointer text-[14px] bg-[#f6c90e] font-[700] h-[46px] w-auto rounded-[100px] py-[16px] px-[20px]"
              onClick={addToCartHandle}
            >
              ADD TO CARD
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductItem;
