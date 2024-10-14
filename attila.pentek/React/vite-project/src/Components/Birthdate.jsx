import PropTypes from "prop-types";

function Birthdate({ birthdate }) {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();
  return (
    <div>
      <p>Birthday: {birthdate.toLocaleDateString()}</p>
      <p>{age} ani</p>
      <button>Calculate age</button>
    </div>
  );
}

Birthdate.propTypes = {
  birthdate: PropTypes.instanceOf(Date),
};

export default Birthdate;
