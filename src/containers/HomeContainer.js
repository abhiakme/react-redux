import {connect} from 'react-redux'
import {addToCart} from '../services/actions/Actions'
import {removeToCart} from '../services/actions/Actions'
import Home from "../component/Home";


const mapStateToProps = (state) => ({
  data: state.cartItems
});
const mapdispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart())
})

export default connect(mapStateToProps,mapdispatchToProps)(Home)
// export default Home;