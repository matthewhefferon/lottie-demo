import "./App.css";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

function App() {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./data.json"),
    });
  }, []);

  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}

export default App;
