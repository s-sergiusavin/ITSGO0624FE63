import "./Coffee.scss";
import PropTypes from "prop-types";

const Coffee = ({ coffee }) => {
  return <div className={`coffe${coffee ? " brown" : ""}`}></div>;
};

Coffee.propTypes = {
  coffee: PropTypes.bool.isRequired,
};

export default Coffee;
