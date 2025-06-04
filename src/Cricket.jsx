import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    setRuns(runs + 1);
  };
  const handleFour = () => {
    setRuns(runs + 4);
  };
  const handleSix = () => {
    setRuns(runs + 6);
    setSixes(sixes + 1);
  };

  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <p>
        <small>Sixes : {sixes}</small>
      </p>

      {runs > 50 && <p>Your Score: 50</p>}
      <p>Your Score: {runs}</p>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
