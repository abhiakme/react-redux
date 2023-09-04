import { connect } from "react-redux";
import { addToCart } from "../services/actions/Actions";
import Header from "../component/Header";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});
const mapdispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapdispatchToProps)(Header);
// export default Home;
