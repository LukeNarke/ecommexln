import { useState, useEffect } from "react";
import s from "./Countdown.module.css"

const CountdownTimer = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const endDateToNow = endDate - now;

      if (endDateToNow < 0) {
        clearInterval(intervalId);
        setExpired(true);
      } else {
        const days = Math.floor(endDateToNow / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (endDateToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((endDateToNow % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((endDateToNow % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setExpired(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return (
    <div className={`wrapper ${s.countdown}`}>
      <h2 className="section-title text-center">Sale Ends in</h2>
      <div className={s.countdown__timer}>
        {expired ? (
          <CountdownTimer
            endDate={new Date().getTime() + 48 * 60 * 60 * 1000}
          />
        ) : (
          timeRemaining
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
