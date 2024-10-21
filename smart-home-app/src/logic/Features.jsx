import Feature from "./Feature";
import PropTypes from "prop-types";
import FeaturesForm from "./FeaturesForm";
import { useState } from "react";

const Features = ({ toggleAction }) => {
  const FEATURES = [
    {
      name: "Toggle Lights",
      action: "Turn the lights on",
      state: true,
      id: 0,
    },
    {
      name: "Toggle AC",
      action: "Turn the AC on",
      state: false,
      id: 1,
    },
    {
      name: "Clean",
      action: "Start vacuuming",
      state: true,
      id: 2,
    },
    {
      name: "Coffee time",
      action: "Make a coffee",
      state: true,
      id: 3,
    },
  ];

  const [features, setFeatures] = useState(FEATURES)

  const toggleTheAction = (value) => {
    toggleAction(value);
  };

  const updateFeatures = (newFeature) => {
    setFeatures(prevState => {
      return [
        ...prevState,
        newFeature
      ]
    })
  }

  return (
    <div className="container">
      <div className="features">
        {features.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              key={feature.id}
              toggleAction={toggleTheAction}
            />
          );
        })}
      </div>
      <FeaturesForm featureHandler={updateFeatures} currentItems={features.length}/>
    </div>
  );
};

Features.propTypes = {
  toggleAction: PropTypes.func.isRequired,
};

export default Features;
