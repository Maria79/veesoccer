const WeekView = () => {
  // Get the current date
  const today = new Date();

  // Calculate the start date (3 days before today) and end date (3 days after today)
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 3);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 3);

  // Initialize an array to hold the days of the week
  const daysOfWeek = [];

  // Loop through the dates and add them to the array
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - 3 + i);

    daysOfWeek.push({
      date: date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      dateOfMonth: date.toLocaleDateString("en-GB", { day: "2-digit" }),
      isToday: date.toDateString() === today.toDateString(),
      dayOfWeek: date.toLocaleDateString("en-GB", { weekday: "short" }), // Adjust the day order
      month: date.toLocaleDateString("en-GB", { month: "short" }),
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-1 pt-2 flex items-center justify-center gap-x-3 border rounded-md shadow">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className="w-40  px-1 py-2 flex items-center justify-center"
        >
          <div
            className={`flex flex-col items-center ${
              day.isToday ? "border-b-2 border-lime-700" : "border-none"
            }`}
          >
            <div>{day.dayOfWeek}</div>
            <div className="text-2xl">{day.isToday ? "Today" : null}</div>

            <div>
              {day.isToday ? (
                <div className="text-xs">
                  {day.dateOfMonth} {day.month}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="text-2xl">{day.dateOfMonth}</div>
                  <div className="text-xs">{day.month}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekView;
