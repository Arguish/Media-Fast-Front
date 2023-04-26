import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Public() {
  const rutasTemporales = ["/", "/Loggin", "/CreateAccount", "/me"];
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
      </Routes>
    </>
  );
}

export default Public;
