import { useState } from "react";
import "./App.scss";
import Features from "./logic/Features";
import Light from "./ui/Light";
import AirCondition from "./ui/AirCondition";
import Room from "./ui/Room";
import { useEffect } from "react";
import { useRef } from "react";
import Coffee from "./ui/Coffee";
import FeaturesForm from "./logic/FeaturesForm";

function App() {
  let [lightState, setLightState] = useState(false);
  let [acState, setAcState] = useState(false);
  let [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });
  let [coffeeState, setCoffeeState] = useState(false);

  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: Math.random(),
  });

  /**Use effect model */

  // useEffect(() => {
  //   console.log("effect triggered");

  //   return () => {
  //     console.log("Component unmount");
  //   };
  // }, [lightState]);

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

  const toggleLights = () => {
    setLightState((prevState) => {
      return !prevState;
    });
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

  const toggleCoffee = () => {
    setCoffeeState((prevState) => {
      return !prevState;
    });
  };

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
      case "Coffee time":
        toggleCoffee();
        break;
    }
  };

  const updateFeatures = (newFeature) => {
    setFeature(newFeature);
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightState} />
        <AirCondition acStatus={acState} />
        <Room status={dirtProgress.status} />
        <Coffee coffee={coffeeState} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={feature} />
      <FeaturesForm updateFeatureHandler={updateFeatures} />
    </div>
  );
}

export default App;
