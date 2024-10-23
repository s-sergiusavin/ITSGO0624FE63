import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";

import FeaturesForm from "./logic/FeaturesForm";
import { Welcome } from "./logic/Welcome";
import SmartHome from "./logic/SmartHome";
import NotFound from "./logic/NotFound";
import HomeIcon from "@mui/icons-material/Home";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AddCardIcon from "@mui/icons-material/AddCard";

function App() {
  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: Math.random(),
  });

  const updateFeatures = (newFeature) => {
    setFeature(newFeature);
  };
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

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to={"/welcome"}>Welcome page</Link>
            </li>
            <li>
              <DevicesOtherIcon />
              <NavLink to={"/smart-home"}>Use smart home app</NavLink>
            </li>
            <li>
              <AddCardIcon />
              <NavLink to={"/features-form"}>Create new features</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature} />} />
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route
          path="/smart-home"
          element={<SmartHome newFeature={feature} />}
        />
        <Route
          path="/features-form"
          element={<FeaturesForm updateFeatureHandler={updateFeatures} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
