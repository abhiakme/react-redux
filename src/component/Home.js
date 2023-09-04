import React from 'react'
import Header from './Header';

const Home = (props) => {
  console.warn("home", props.data);
  return (
    <div>
      {/* <div className="add-to-cart">
      <span>{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg" />
      </div> */}
      {/* <Header data={props.data}/> */}
      <h1>Home</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.ctfassets.net/wcfotm6rrl7u/5XNcZlJ9ERf2HngaL9gASZ/4f43f2e622152e3a482f65355c6a2acd/nokia-103-Dark_Blue-front-int.png" />
        </div>
        <div className="text-wrapper item">
          <span>Nokia 1200</span>
          <span>Price: Rs 1200.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={() => 
          props.addToCartHandler({price:1200,name:"nokia"})
          }>Add To Cart</button>
          <button onClick={() => 
          props.removeToCartHandler()
          }>Remove From Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home
