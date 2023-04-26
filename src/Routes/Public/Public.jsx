import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Public() {
  const rutasTemporales = [
    "/",
    "/Auth",
    "/Auth/register",
    "/Auth/loggin",
    "/sugestions",
    "/sugestions/show",
    "/sugestions/movie",
    "/me",
    "/ByeMF",
  ];
  return (
    <>
      <Routes>
        {rutasTemporales.map((a) => {
          return (
            <Route
              path={a}
              loader={() => console.log({ a })}
              element={<Home temporal={a} array={rutasTemporales}></Home>}
              errorElement={<Home temporal="ERROR"></Home>}
            ></Route>
          );
        })}
        <Route
          path={"/*"}
          loader={() => console.log(404)}
          element={<Home temporal={"ERROR: 404"} array={[]}></Home>}
        ></Route>
      </Routes>
    </>
  );
}

export default Public;
