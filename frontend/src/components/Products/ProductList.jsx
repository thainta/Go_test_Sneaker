import React from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

function ProductList() {
  const baseURL = "http://127.0.0.1:5000/shoes";
  const [shoes, setShoes] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setShoes(response.data);
    });
  }, []);

  return (
    <div>
      {shoes.map((shoe) => (
        <ProductItem
          key={shoe.id}
          data ={shoe}
        />
      ))}
    </div>
  );
}

export default ProductList;
