import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Landing page */}
      <div className="App">
        <h1>HackByte</h1>
        <div>
          <button className="apply-btn">Apply</button>
          <button className="discord-btn">Discord</button>
        </div>
      </div>
      {/* About */}
      <div className="About-con">
        <h1>About</h1>
        <p>
          HackByte is the IIITDMJ's student-run hackathon, which centers on
          bringing developers and problem solvers from different foundations
          together and enables them to develop projects that can bring out an
          impact. The hackathon gives a fun yet challenging way to gain
          knowledge around various technologies and gives a lot more
          opportunities to utilize them within.
        </p>
      </div>
      {/* Prizes */}
      <div className="Prizes-con">
        <img src="/images/prizes.png" alt="prizes" />
        <h1>Prizes</h1>
        <p>Prizes will be declared soon!</p>
      </div>
      {/* Timeline */}
      <div className="Timeline-con">
        <h1>Timeline</h1>
      </div>
      {/* Theme */}
      <div className="Theme-con">
        <h1>The New Normal</h1>
      </div>
      {/* Faq */}
      <div className="faq-con">
        <h1>Frequently Asked Questions</h1>
      </div>
    </>
  );
}

export default App;
