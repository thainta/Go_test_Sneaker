import React from "react";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <React.Fragment>
      <div className="bg-[#F6C90E]">
        <div className="m-auto h-[100vh] flex justify-between items-center max-w-[760px]">
          <Products />
          <Cart />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
