import React from "react";
import { useEffect, useState } from "react";
import Timer from "./Timer";
const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval: any;
  useEffect(() => {
    startTimer();
  });

  const startTimer = () => {
    const countDownDate = new Date("November 25,2023 ").getTime();

    interval = setInterval(() => {
      const now: any = new Date().getTime();

      const distance: any = countDownDate - now;

      const days: any = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours: any = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes: any = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      );

      const seconds: any = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  return (
    <div className="App">
      <Timer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
};

export default React.memo(CountdownTimer);
