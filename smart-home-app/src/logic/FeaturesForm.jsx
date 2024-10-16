import { useRef, useState } from "react";
import PropTypes from 'prop-types';

const FeaturesForm = ({featureHandler, currentItems}) => {
  const [isFormValid, setFormValid] = useState(true);

  const titleInputRef = useRef();
  const actionInputRef = useRef();
  const stateInputRef = useRef();
  const descriptionInputRef = useRef();

  const checkValid = () => {
    if (
      titleInputRef.current.value === "" ||
      actionInputRef.current.value === "" ||
      stateInputRef.current.value === "" ||
      descriptionInputRef.current.value === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const resetFields = () => {
    titleInputRef.current.value = '';
    actionInputRef.current.value = '';
    stateInputRef.current.value = '';
    descriptionInputRef.current.value = '';
  }

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();

    const titleValue = titleInputRef.current.value;
    const actionValue = actionInputRef.current.value;
    const stateValue = stateInputRef.current.value;
    // const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
      name: titleValue,
      action: actionValue,
      state: stateValue,
      id: currentItems,
    };

    featureHandler(newFeature)
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
        <input type="text" id="title" required ref={titleInputRef} />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input type="text" id="action" required ref={actionInputRef} />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <select id="state" required ref={stateInputRef}>
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
          ref={descriptionInputRef}
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
    currentItems: PropTypes.number.isRequired
}

export default FeaturesForm;
