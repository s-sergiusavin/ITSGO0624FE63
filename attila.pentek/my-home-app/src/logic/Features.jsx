import Feature from "./Feature";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Features = ({ toggleAction, newFeature }) => {
  const FEATURES = [
    {
      name: "Toggle Lights",
      action: "Turn the lights on",
      state: false,
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
      action: "Start vacuming",
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

  const [features, setFeatures] = useState(FEATURES);

  useEffect(() => {
    features.map((feature) => {
      if (feature.name === newFeature.name) {
        alert(
          "This feature already exists. Please try again with another name."
        );
        newFeature.name = "";
      }
    });

    if (newFeature.name !== "") {
      setFeatures((prevState) => {
        return { newFeature, ...prevState };
      });
    }
  }, [newFeature]);

  const toggleLights = () => {
    setFeatures((prevState) => {
      const updatedFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle Lights") {
          feature.state = !feature.state;
          feature.action = `Turn the lights ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });
      return updatedFeatures;
    });
  };

  const toggleAc = () => {
    setFeatures((prevState) => {
      const updatedFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle AC") {
          feature.state = !feature.state;
          feature.action = `Turn the AC ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });
      return updatedFeatures;
    });
  };

  const toggleTheAction = (value) => {
    toggleAction(value);

    switch (value) {
      case "Toggle Lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
    }
  };

  return (
    <div className="container">
      <div className="features">
        {features.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              state={feature.state}
              key={feature.id}
              toggleAction={toggleTheAction}
            />
          );
        })}
      </div>
    </div>
  );
};

Features.propTypes = {
  toggleAction: PropTypes.func.isRequired,
  newFeature: PropTypes.object,
};

export default Features;
