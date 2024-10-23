import PropTypes from "prop-types";
import buttonIcon from "./../assets/images/light-on.jpg";
import buttonIconOff from "./../assets/images/light-on.jpg";
import "./Feature.scss";
import { useEffect, useState } from "react";

const Feature = ({ name, action, toggleAction, state }) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    state ? setIcon(buttonIcon) : setIcon(buttonIconOff);
  }, [state]);
  const featureButtonHandler = () => {
    toggleAction(name);
  };

  return (
    <div className="feature">
      <img src={icon} alt="" />
      <h3>{name}</h3>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
};

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  toggleAction: PropTypes.func.isRequired,
  state: PropTypes.bool,
};

export default Feature;
