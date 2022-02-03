import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";
import Intro from "../src/Sintro.png";
import Login from "../src/Slogin.png";
import Admin from "../src/Sadmin.png";
import Connect1 from "../src/Sconnect1.png";
import Connect2 from "../src/Sconnect2.png";
import Stats from "../src/Sstats.png";
import Batstats from "../src/Sbatstats.png";
import Batrep from "../src/Sbatrep.png";
import Choice1 from "../src/Schoice1.png";
import Confirm1 from "../src/Sdecision1.png";
import Choice2 from "../src/Schoice2.png";
import Materials from "../src/Smat.png";
import Repurposing from "../src/Srefu.png";
import Endmat from "../src/Sendmat.png";
import Endrep from "../src/Sendrefu.png";

/* Change debug to `true` to see the invisible Buttons */

export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image={Intro}>
              <Button to="/Login" x="520" y="470" w="160" h="50" />
            </Screen>
          }
        />
        <Route
          path="/Login"
          element={
            <Screen image={Login}>
              <Button to="/Admin" x="440" y="460" w="320" h="50" />
              <Button to="/Connect1" x="520" y="385" w="160" h="50" />
            </Screen>
          }
        />
        <Route
          path="/Admin"
          element={
            <Screen image={Admin}>
              <Button to="/Login" x="500" y="375" w="190" h="50" />
            </Screen>
          }
        />
        <Route
          path="/Connect1"
          element={
            <Screen image={Connect1}>
              <Button to="/Connect2" x="480" y="375" w="240" h="50" />
            </Screen>
          }
        />

        <Route
          path="/Connect2"
          element={
            <Screen image={Connect2}>
              <Button to="/Stats" x="480" y="375" w="250" h="50" />
            </Screen>
          }
        />

        <Route
          path="/Stats"
          element={
            <Screen image={Stats}>
              <Button to="/Batstats" x="580" y="440" w="380" h="50" />
            </Screen>
          }
        />

        <Route
          path="/Batstats"
          element={
            <Screen image={Batstats}>
              <Button to="/Batrep" x="575" y="425" w="380" h="50" />
            </Screen>
          }
        />
        <Route
          path="/Batrep"
          element={
            <Screen image={Batrep}>
              <Button to="/Choice1" x="545" y="435" w="380" h="50" />
            </Screen>
          }
        />
        <Route
          path="/Choice1"
          element={
            <Screen image={Choice1}>
              <Button to="/Confirm1" x="295" y="365" w="300" h="45" />
            </Screen>
          }
        />
        <Route
          path="/Confirm1"
          element={
            <Screen image={Confirm1}>
              <Button to="/Choice2" x="785" y="445" w="140" h="45" />
            </Screen>
          }
        />
        <Route
          path="/Choice2"
          element={
            <Screen image={Choice2}>
              <Button to="/Materials" x="305" y="310" w="230" h="45" />
              <Button to="/Repurposing" x="285" y="380" w="265" h="45" />
            </Screen>
          }
        />
        <Route
          path="Materials"
          element={
            <Screen image={Materials}>
              <Button to="/Repurposing" x="275" y="375" w="290" h="40" />
              <Button to="/Endmat" x="800" y="440" w="140" h="45" />
            </Screen>
          }
        />
        <Route
          path="/Repurposing"
          element={
            <Screen image={Repurposing}>
              <Button to="/Materials" x="295" y="305" w="250" h="45" />
              <Button to="/Endrefu" x="800" y="445" w="140" h="45" />
            </Screen>
          }
        />
        <Route
          path="/Endmat"
          element={
            <Screen image={Endmat}>
              <Button to="/Stats" x="655" y="445" w="270" h="40" />
            </Screen>
          }
        />
        <Route
          path="/Endrefu"
          element={
            <Screen image={Endrep}>
              <Button to="/Stats" x="655" y="445" w="270" h="40" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
