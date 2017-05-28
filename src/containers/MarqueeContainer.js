import {connect} from "react-redux";
import Marquee from "../components/Marquee";

function mapStateToProps(state, ownProps) {
  return {
    text: state.text
  };
}

const MarqueeContainer = connect(mapStateToProps)(Marquee);

export default MarqueeContainer;
