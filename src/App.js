//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [valueHome, setCountHome] = useState(0)
  const [valueAway, setCountAway] = useState(0)
  
  // const Timer = () => {
  //   const [seconds, setSeconds] = useState(0);
  //   const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> {valueHome} </div>
          </div>
          <div className="timer">0:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"> {valueAway} </div>
          </div>
        </div>


        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setCountHome(valueHome + 6)}>Home Touchdown</button>
          <button className="homeButtons__pat" onClick={() => setCountHome(valueHome + 1)}>Home PAT</button>
          <button className="homeButtons__fieldGoal" onClick={() => setCountHome(valueHome + 3)}>Home Field Goal</button>
          <button className="homeButtons__twopoints" onClick={() => setCountHome(valueHome + 2)}>Home 2PT Con/Safety</button>
          <button className="homeButtons__reset" onClick={() => setCountHome(0)}>Reset Home</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setCountAway(valueAway + 6)}>Away Touchdown</button>
          <button className="awayButtons__pat" onClick={() => setCountAway(valueAway + 1)}>Away PAT</button>
          <button className="awayButtons__fieldGoal" onClick={() => setCountAway(valueAway + 3)}>Away Field Goal</button>
          <button className="awayButtons__twopoints" onClick={() => setCountAway(valueAway + 2)}>Away 2PT Con/Safety</button>
          <button className="awayButtons__reset" onClick={() => setCountAway(0)}>Reset Away</button>

        </div>
      </section>
    </div>
  );
}

export default App;
