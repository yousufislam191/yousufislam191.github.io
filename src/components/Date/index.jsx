import React, { useState, useEffect } from "react";

function CurrentMonthYear() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();

      if (month !== currentMonth || year !== currentYear) {
        setCurrentMonth(month);
        setCurrentYear(year);
      }
    }, 24 * 60 * 60 * 1000); // Update every day

    // Set initial values
    const currentDate = new Date();
    setCurrentMonth(currentDate.toLocaleString("default", { month: "long" }));
    setCurrentYear(currentDate.getFullYear());

    return () => clearInterval(intervalId);
  }, [currentMonth, currentYear]);

  return (
    <span>
      {" "}
      {currentMonth} {currentYear}{" "}
    </span>
  );
}

export default CurrentMonthYear;
