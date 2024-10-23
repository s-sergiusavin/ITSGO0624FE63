import { useState } from "react";
import Feature from "./Feature";
import PropTypes from "prop-types";

const FeaturesForm = ({ updateFeatureHandler }) => {
  const [isFormValid, setFormValid] = useState(true);
  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState("false");
  const [descriptionField, setDescriptionField] = useState("");

  // const titleInputRef = useRef();
  // const actionInputRef = useRef();
  // const stateInputRef = useRef();
  // const descriptionInputRef = useRef();

  const checkValid = () => {
    if (nameField === "" || actionField === "" || descriptionField === "") {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const nameChangeHandler = (e) => {
    setNameField(e.target.value);
  };

  const actionChangeHandler = (e) => {
    console.log(e);
    setActionField(e.target.value);
  };

  const resetFields = () => {
    setNameField = "";
    setActionField = "";
    setStateField = "";
    setDescriptionField = "";
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
        <input
          type="text"
          id="title"
          required
          onChange={nameChangeHandler}
          value={nameField}
        />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input
          type="text"
          id="action"
          required
          onChange={actionChangeHandler}
          value={actionField}
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
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        {/* <input type="text" id="state" required ref={stateInputRef} /> */}
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <input
          type="text"
          id="description"
          required
          onChange={(e) => setDescriptionField(e.target.value)}
          value={descriptionField}
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
