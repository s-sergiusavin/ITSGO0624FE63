import { useEffect, useRef, useState } from "react";
import Features from "./Features";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Ac from "../ui/Ac";
import PropTypes from "prop-types";

const SmartHome = ({ newFeature }) => {
  let [lightState, setLightState] = useState(true);
  let [acState, setAcState] = useState(false);
  let [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });

  const dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress((prevState) => {
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current);
        }
        // console.log(prevState.status);
        // console.log(dirtInterval.current);
        return {
          ...prevState,
          status: prevState.status + 0.1,
        };
      });
    }, 2000);
  }, [dirtProgress.cleaned]);

  const toggleActionHandler = (action) => {
    switch (action) {
      case "Toggle Lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
      case "Clean":
        startCleaning();
        break;
    }
  };

  const toggleLights = () => {
    setLightState((prevState) => {
      return !prevState;
    });
    // setLightState(!lightState)
  };

  const toggleAc = () => {
    setAcState((prevState) => {
      return !prevState;
    });
  };

  const startCleaning = () => {
    clearInterval(dirtInterval.current);

    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1,
      };
    });
  };

  return (
    <>
      <div className="ui-features">
        <Light lightsOn={lightState} />
        <Ac acOn={acState} />
        <Room status={dirtProgress.status} />
      </div>

      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  );
};

SmartHome.propTypes = {
  newFeature: PropTypes.object,
};

export default SmartHome;
