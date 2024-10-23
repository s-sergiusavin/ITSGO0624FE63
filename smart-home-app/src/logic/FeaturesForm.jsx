import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const FeaturesForm = ({ updateFeatureHandler }) => {
  const [isFormValid, setFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState(false);
  const [descriptionField, setDescriptionField] = useState("");

  const [nameFieldError, setNameFieldError] = useState(false);

  const navigate = useNavigate();

  const stateValues = [
    {
      value: true,
      label: "👍 True",
    },
    {
      value: false,
      label: "👎 False",
    },
  ];

  // const stateMethodDescription = (value) => {
  //   let example = value;

  //   const changeThis = (someValue) => {
  //     example = someValue;
  //   };

  //   return [example, changeThis];
  // };
  // const [primulLucruReturnat, functiaCareSchimbaValoarea] = stateMethodDescription(5)
  // functiaCareSchimbaValoarea('test')
  // console.log(primulLucruReturnat)

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

    if (nameField === "") {
      setNameFieldError(true);
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
    setStateField(false);
    setDescriptionField("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();

    if (isFormValid) {
      return;
    }

    const newFeature = {
      name: nameField,
      action: actionField,
      state: stateField,
      id: Math.random(),
    };

    updateFeatureHandler(newFeature);
    resetFields();
    navigate("/smart-home");
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={submitHandler}
    >
      <TextField
        error={nameFieldError}
        id="title-outlined-error-helper-text"
        label="Feature title"
        value={nameField}
        onChange={nameChangeHandler}
        helperText={nameFieldError && "Incorrect name."}
        fullWidth 
        required
      />

      <TextField
        error={nameFieldError}
        id="action-outlined-error-helper-text"
        label="Feature action"
        value={actionField}
        onChange={actionChangeHandler}
        helperText={nameFieldError && "Incorrect name."}
        fullWidth 
        required
      />

      <TextField
        id="state-outlined-select-currency"
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select your currency"
        value={stateField}
        fullWidth 
        onChange={(e) => setStateField(Boolean(e.target.value))}
      >
        {stateValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        error={nameFieldError}
        id="action-outlined-error-helper-text"
        label="Feature description"
        value={descriptionField}
        onChange={(e) => setDescriptionField(e.target.value)}
        helperText={nameFieldError && "Incorrect name."}
        multiline
        minRows={4}
        fullWidth 
        required
      />

      <div className="actions">
        <Button variant="contained" type="submit">
          Add Feature
        </Button>
      </div>
    </form>
  );
};

FeaturesForm.propTypes = {
  updateFeatureHandler: PropTypes.func.isRequired,
};

export default FeaturesForm;
