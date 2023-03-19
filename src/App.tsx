import React from "react";
import AzarashiSvg from "./components/AzarashiSvg";

function App(): JSX.Element {
  return (
    <>
      <AzarashiSvg
        bodyColor="white"
        mouseColor="#DCDCDC"
        cheekColor="#FBBABA"
        eyeColor="black"
        beardNumber={2}
      />
    </>
  );
}

export default App;
