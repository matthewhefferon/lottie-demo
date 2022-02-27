import "./App.css";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import AU from "./ActiveUsers.json";


function App() {
  const [play, setPlay] = useState(true);
  const [loop, setLoop] = useState(true);

  return (
    <div className="App">
      <Lottie loop animationData={AU} play={play} loop={loop} />

      {/* Loop */}
      <div className="controls">
        <div className="loop">
          <input
            type="checkbox"
            checked={loop}
            onChange={(e) => setLoop(e.target.checked)}
            id="loop"
          />{" "}
          <label htmlFor="loop">Loop</label>
        </div>

        {/* Play */}
        <div className="play">
          <input
            type="checkbox"
            checked={play}
            onChange={(e) => setPlay(e.target.checked)}
            id="playing"
          />{" "}
          <label htmlFor="playing">Playing</label>
        </div>
      </div>
    </div>
  );
}

export default App;
