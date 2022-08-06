// react router dom
import { Route, Routes, Navigate } from "react-router-dom";
// components
import LayOut from "./components/layout";
import ShadowGenerator from "./components/ShadowGenerator";
import Gradient from "./components/Gradient";
import TextShadowGenerator from "./components/TextShadowGenerator";

const App = () => {
  return (
    <LayOut>
      <Routes>
        <Route path="/shadowGenerator" element={<ShadowGenerator />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/textShadowGenerator" element={<TextShadowGenerator />} />
        <Route path="/*" element={<Navigate to="/shadowGenerator" />} />
      </Routes>
    </LayOut>
  );
};

export default App;
