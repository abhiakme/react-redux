import React from "react";

const Header = (props) => {
    const data=props.data
    console.log("data",data);
  return (
    <div>
    <h1>Header</h1>
      <div className="add-to-cart">
        <span>{data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg" />
      </div>
    </div>
  );
};

export default Header;
