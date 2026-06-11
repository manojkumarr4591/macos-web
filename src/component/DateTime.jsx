import { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const day = now.toLocaleString("en-US", {
        weekday: "short",
      });

      const month = now.toLocaleString("en-US", {
        month: "short",
      });

      const date = now.getDate();

      const clock = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setTime(`${day} ${month} ${date} ${clock}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
};

export default DateTime;