import Feature from "./Feature";
import PropTypes from "prop-types";

const Features = ({ toggleAction }) => {
  const FEATURES = [
    {
      name: "Toggle Lights",
      action: "Turn the lights on",
      state: true,
      id: 0,
    },
    {
      name: "Toggle Ac",
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
      name: "Coffee Time",
      action: "Make a coffee",
      state: true,
      id: 3,
    },
  ];

  const toggleTheAction = (value) => {
    toggleAction(value);
  };

  return (
    <div className="container">
      {FEATURES.map((feature) => {
        return (
          <Feature
            name={feature.name}
            action={feature.action}
            key={feature.id}
            toggleAction={toggleTheAction}
          />
        );
      })}

      {/* // <Feature name={FEATURES[0].name} action={FEATURES[0].action} />
      // <Feature name={FEATURES[1].name} action={FEATURES[1].action} />
      // <Feature name={FEATURES[2].name} action={FEATURES[2].action} />
      // <Feature name={FEATURES[3].name} action={FEATURES[3].action} /> */}
    </div>
  );
};

Features.propTypes = {
  toggleAction: PropTypes.func.isRequired,
};

export default Features;
