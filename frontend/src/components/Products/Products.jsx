import React from "react";
import nikeLogo from "../../assets/nike.png";
import Card from "../UI/Card";
import ProductList from "./ProductList";
function Products() {
  return (
    <Card>
      <div className="header my-[12px]">
        <div className="my-[12px]">
          <img className="w-[50px]" src={nikeLogo} alt="" />
        </div>
        <div className="content text-2xl font-[700]">Our Products</div>
      </div>
      <div className="overflow-y-scroll no-scrollbar h-[30rem]">
        <ProductList />
      </div>
    </Card>
  );
}

export default Products;
