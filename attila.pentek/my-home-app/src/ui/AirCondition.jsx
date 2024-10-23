import "./AirCondition.scss";
import PropTypes from "prop-types";

const AirCondition = ({ acStatus }) => {
  return <div className={`airCondition${acStatus ? " blue" : ""}`}></div>;
};

AirCondition.propTypes = {
  acStatus: PropTypes.bool.isRequired,
};

export default AirCondition;
