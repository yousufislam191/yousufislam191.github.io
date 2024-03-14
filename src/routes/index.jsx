import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RouterPath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPath;
