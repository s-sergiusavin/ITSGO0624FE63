import PropTypes from "prop-types";

function Birthdate(birthdate) {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  return (
    <div>
      <p>Birthday: 09.10.2024</p>
      <p>33 ani</p>
    </div>
  );
}

Birthdate.PropTypes = {
  birthdate: PropTypes.instanceOf(Date),
};

export default Birthdate;
