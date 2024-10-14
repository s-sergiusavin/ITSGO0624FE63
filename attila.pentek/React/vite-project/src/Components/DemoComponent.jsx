import Birthdate from "./Birthdate";
import "./DemoComponent.scss";
import PropTypes from "prop-types";

function DemoComponent({ name, birthday }) {
  return (
    <div className="demo-component">
      <h2>{name}</h2>

      <Birthdate birthdate={birthday} />
    </div>
  );
}

DemoComponent.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.instanceOf(Date),
};

export default DemoComponent;
