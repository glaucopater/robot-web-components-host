import { Route } from "react-router-dom";
import Home from "./pages/Home/";
import { Routes } from "react-router";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
