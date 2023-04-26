import { GlobalContext } from "./Context";

function ContextProvider({ children }) {
  const appName = "Media-Fast";
  return (
    <>
      <GlobalContext.Provider value={{ appName }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
