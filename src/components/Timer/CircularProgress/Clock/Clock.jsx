import { useEffect, useContext } from "react";
import { StateContext } from "../../../StateProvider";

const Clock = () => {
  const {time, setTime, isActive, setIsActive, initTime} = useContext(StateContext);


  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
      setIsActive(!isActive);
  }

  const resetTime = () => {
    setTime(initTime)
    setIsActive(false)
  }
  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <div className="grid place-items-center">
      <h3 className="text-[10rem]">{getTime(time)}</h3>
      <button onClick={toggleClock} className="text-5xl uppercase tracking-[1rem] text-center">
        {isActive ? "pause" : "start"}
      </button>
      {time === 0 && <button onClick={resetTime} className="text-red-600 text-5xl uppercase tracking-[1rem] text-center">reset</button>}
    </div>
  );
};

export default Clock;
