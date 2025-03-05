import "./App.css";
import { useEffect, useState } from "react";
import TypeName from "./components/TypeName";
import AdditionalLinks from "./components/AdditionalLinks";
import { NAME } from "./constants";

function App() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") setShowName(true);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="main">
      {!showName ? (
        <ButtonElement showNameFnc={() => setShowName(true)} />
      ) : (
        <TypeName name={NAME} />
      )}
      <AdditionalLinks />
    </div>
  );
}

function ButtonElement({ showNameFnc }) {
  return (
    <button className="frosted-glass" onClick={showNameFnc}>
      <div className="enter-btn">Enter</div>
    </button>
  );
}

export default App;
