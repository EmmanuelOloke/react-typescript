import { useState, useRef, useEffect } from 'react';

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIsDisabled(true);
  };

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setIsDisabled(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <div>HookTimer - {timer} - </div>
      <button disabled={isDisabled} onClick={() => startTimer()}>
        Start Timer
      </button>
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <button onClick={() => resetTimer()}>Reset Timer</button>
    </div>
  );
};
