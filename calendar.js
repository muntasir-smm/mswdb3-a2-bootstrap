document.addEventListener("DOMContentLoaded", () => {
  const calendarDays = document.getElementById("calendarDays");
  const currentMonth = document.getElementById("currentMonth");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");

  let date = new Date();

  function renderCalendar() {
    date.setDate(1);
    const monthDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const firstDayIndex = date.getDay();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    currentMonth.textContent = `${
      months[date.getMonth()]
    } ${date.getFullYear()}`;

    calendarDays.innerHTML = "";

    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("calendarCell", "col", "text-muted");
      calendarDays.appendChild(emptyCell);
    }

    for (let i = 1; i <= monthDays; i++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendarCell", "col");
      dayCell.innerHTML = i;

      if (i % 2 === 0) {
        dayCell.classList.add("workoutDay");
      }

      calendarDays.appendChild(dayCell);
    }

    const totalCells = firstDayIndex + monthDays;
    if (totalCells % 7 !== 0) {
      const nextDays = 7 - (totalCells % 7);
      for (let i = 1; i <= nextDays; i++) {
        const nextCell = document.createElement("div");
        nextCell.classList.add("calendarCell", "col", "text-muted");
        calendarDays.appendChild(nextCell);
      }
    }
  }

  prevMonthBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});
