import { add_to_cart, remove_to_cart } from "../Constants";
export const addToCart=(data)=>{
    console.warn("action",data)
    return {
        type:add_to_cart,
        data:data
    }
};

export const removeToCart = () => {
  return {
    type: remove_to_cart
  };
};