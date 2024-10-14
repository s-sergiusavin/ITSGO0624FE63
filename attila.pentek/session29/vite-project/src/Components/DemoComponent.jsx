import Birthdate from "./Birthdate";
import "./Components/DemoComponent.jsx";
import PropTypes from "prop-types";
import DemoComponent from "./DemoComponent.scss";

function DemoComponent({ name, birthday }) {
  return (
    <div className="demo-component">
      <h2>{name}</h2>

      <button>Calculate age</button>
      <Birthdate />
    </div>
  );
}

DemoComponent.PropTypes = {
  name: PropTypes.string,
  birthday: PropTypes.instanceof(Date),
};

export default DemoComponent;
