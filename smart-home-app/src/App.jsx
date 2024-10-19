import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Features from "./logic/Features";
import Light from "./ui/Light";
import Room from "./ui/Room";
import Ac from "./ui/Ac";

function App() {
  let [lightState, setLightState] = useState(false);
  let [acState, setAcState] = useState(false);
  let [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });

  /** Bad example: NU folositi un obiect de state pt variabile care nu au legatura */
  // const [actions, setActions] = useState({
  //   lightState: false,
  //   acState: false,
  //   dirtStatus: 0,
  //   cleaned: 0,
  // });

  /** Use effect model */

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
    // setLightState(!lightState)
  };

  const toggleAc = () => {
    setAcState((prevState) => {
      return !prevState;
    });
  };

  const startCleaning = () => {
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1,
      };
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
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Light lightsOn={lightState} />
        <Ac acOn={acState} />
        <Room status={dirtProgress.status} />
      </div>
      <Features toggleAction={toggleActionHandler} />
    </div>
  );
}

export default App;
