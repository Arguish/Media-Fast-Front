import { useContext } from "react";
import { GlobalContext } from "../../Context/Context/Context";

function Hello() {
  const { appName } = useContext(GlobalContext);

  return (
    <div>
      {" "}
      <span>{appName}</span>
    </div>
  );
}

export default Hello;
