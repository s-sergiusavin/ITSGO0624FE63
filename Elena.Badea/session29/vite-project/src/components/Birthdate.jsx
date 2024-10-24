import PropTypes from "prop-types";

function Birthdate({birthdate, loggerHandler}) {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    console.log(age);
    const doSomethingInParrent = () => {
        loggerHandler();
    }
    
  return (
    <div>
      <p>Birthday: {birthdate.toLocaleDateString()}</p>
      <p>{age} ani</p>
      <button onClick={doSomethingInParrent}>Calculate age</button>
    </div>
  );
}

Birthdate.propTypes = {
    birthdate: PropTypes.instanceOf(Date),
    loggerHandler: PropTypes.func
}

export default Birthdate;
