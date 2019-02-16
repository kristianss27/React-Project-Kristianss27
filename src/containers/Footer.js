import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from "../components/Layouts/Footer";
import { setCategory } from "../actions";
import { muscles } from "../store";

const mapStateToProps = state => ({
  muscles,
  category: state.category
});

const mapDispatchToProps = dispatch => ({
    onSelect: id => {
      dispatch(setCategory(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
