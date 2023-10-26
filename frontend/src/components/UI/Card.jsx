import React from "react";

function Card(props) {
  return (
    <div className="rounded-[30px] bg-[#ffffff] h-[37.5rem] w-[22.5rem] px-[1.75rem] box-border shadow-2xl">
      {props.children}
    </div>
  );
}

export default Card;
