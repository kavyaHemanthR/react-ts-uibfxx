import React from 'react';

function CountdownTimer() {
  const [initialDuration, setInitialDuration] = React.useState(0);
  const [displayTimer, setDisplayTimer] = React.useState(0);
  const [buttonClick, setButtonClick] = React.useState(false);

  function onStartTimer() {
    setButtonClick(true);
  }

  React.useEffect(() => {
    const timer =
      displayTimer > 0 &&
      setInterval(() => setDisplayTimer(displayTimer - 1), 1000);
    //setButtonClick(true);
    return () => clearInterval(timer);
  }, [displayTimer]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <label>Set Initial Duration (sec) : </label>
      <input
        type="text"
        value={initialDuration}
        onChange={(e) => {
          setDisplayTimer(e.target.value);
          setInitialDuration(e.target.value);
        }}
      />

      <div className="center">
        <button onClick={onStartTimer}>Start Timer</button>
        <h1>{displayTimer}</h1>
      </div>
    </div>
  );
}

export default CountdownTimer;
