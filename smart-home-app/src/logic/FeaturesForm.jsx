import { useState } from "react";
import PropTypes from "prop-types";

const FeaturesForm = ({ updateFeatureHandler }) => {
  const [isFormValid, setFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState(false);
  const [descriptionField, setDescriptionField] = useState("");

  const stateMethodDescription = (value) => {
    let example = value;

    const changeThis = (someValue) => {
      example = someValue;
    };

    return [example, changeThis];
  };
  // const [primulLucruReturnat, functiaCareSchimbaValoarea] = stateMethodDescription(5)
  // functiaCareSchimbaValoarea('test')
  // console.log(primulLucruReturnat)

  // const titleInputRef = useRef();
  // const actionInputRef = useRef();
  // const stateInputRef = useRef();
  // const descriptionInputRef = useRef();

  const checkValid = () => {
    if (
      nameField === "" ||
      actionField === "" ||
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
    setNameField('')
    setActionField('')
    setStateField(false)
    setDescriptionField('')
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();
    // const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
      name: nameField,
      action: actionField,
      state: stateField,
      id: Math.random(),
    };

    updateFeatureHandler(newFeature);
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
        <input type="text" id="title" required onChange={nameChangeHandler} value={nameField}/>
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input
          type="text"
          id="action"
          required
          value={actionField}
          onChange={actionChangeHandler}
        />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <select
          id="state"
          required
          value={stateField}
          onChange={(e) => setStateField(Boolean(e.target.value))}
        >
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <input
          type="text"
          id="description"
          required
          value={descriptionField}
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
  updateFeatureHandler: PropTypes.func.isRequired,
};

export default FeaturesForm;
