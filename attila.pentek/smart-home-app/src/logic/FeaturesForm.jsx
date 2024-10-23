import { useRef, useState } from "react";
import PropTypes from "prop-types";

const FeaturesForm = ({ featureHandler, currentItems }) => {
  const [isFormValid, setFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState("");
  const [descriptionField, setDescriptionField] = "";

  const stateMethodDescription = (value) => {
    let example = value;

    const changeThis = (someValue) => {
      example = someValue;
    };

    return [example, changeThis];
  };

  // const [primulLucruReturnat, functiaCareSchimbaValoarea] =
  //   stateMethodDescription(5);
  // functiaCareSchimbaValoarea("test");
  // console.log(testState);

  // const titleInputRef = useRef();
  // const actionInputRef = useRef();
  // const stateInputRef = useRef();
  // const descriptionInputRef = useRef();

  const checkValid = () => {
    if (
      nameField === "" ||
      actionField === "" ||
      stateField === "" ||
      descriptionField === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const nameChangeHandler = (e) => {
    // console.log(e);
    setNameField(e.target.value);
  };

  const actionChangeHandler = (e) => {
    // console.log(e);
    setActionField(e.target.value);
  };

  const resetFields = () => {
    setNameField("");
    setActionField("");
    setStateField("false");
    setDescriptionField("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();

    const titleValue = titleInputRef.current.value;
    const actionValue = actionInputRef.current.value;
    const stateValue = stateInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
      nameField: titleValue,
      actionField: actionValue,
      stateField: stateValue,
      id: currentItems,
    };

    featureHandler(newFeature);
    resetFields();
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={submitHandler}
    >
      <div className="control">
        <label htmlFor="title">Feature title</label>
        <input type="text" id="title" required onChange={nameChangeHandler} />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input
          type="text"
          id="action"
          required
          onChange={actionChangeHandler}
        />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <select
          id="state"
          required
          onChange={() => setStateField(git.target.value)}
          value={stateField}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <input
          type="text"
          id="description"
          required
          onChange={(e) => setDescriptionField(e.target.value)}
        />
      </div>

      <div className="actions">
        <button>Add feature</button>
      </div>
    </form>
  );
};

FeaturesForm.propTypes = {
  featureHandler: PropTypes.func.isRequired,
  currentItems: PropTypes.number.isRequired,
};

export default FeaturesForm;
