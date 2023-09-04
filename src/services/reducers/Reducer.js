import { add_to_cart, remove_to_cart } from "../Constants";
const initialState={
    cartData:[]
}


export default function cartItems(state=[],action) {
    switch (action.type) {
      case add_to_cart:
        console.warn("reducer", action);
        return [...state, { cartData: action.data }];
        break;
      case remove_to_cart:
        console.warn("reducer", action);
        state.pop()
        return [...state];
        break;
      default:
        return state;
    }
}