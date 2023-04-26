import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Public() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          loader={() => console.log("/")}
          element={<Home temporal="/"></Home>}
          errorElement={<Home temporal="ERROR"></Home>}
        ></Route>
      </Routes>
    </>
  );
}

export default Public;
