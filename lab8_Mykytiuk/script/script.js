let time = {
    hour: 0,
    minute: 0,
    second: 0,
    displayTime: function () {
      let timeStr = "";
      timeStr += (this.hour < 10 ? "0" : "") + this.hour;
      timeStr += (this.minute < 10 ? ":0" : ":") + this.minute;
      timeStr += (this.second < 10 ? ":0" : ":") + this.second;
      document.getElementById("my_clock").innerHTML = timeStr;
    },
    addHours: function (hours) {
      this.hour = (this.hour + hours) % 24;
    },
    addMinutes: function (minutes) {
      this.minute += minutes;
      this.addHours(Math.floor(this.minute / 60));
      this.minute %= 60;
    },
    addSeconds: function (seconds) {
      this.second += seconds;
      this.addMinutes(Math.floor(this.second / 60));
      this.second %= 60;
    },
  };
  document.querySelector("#add_time").addEventListener("click", () => {
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    time.addHours(hours);
    time.addMinutes(minutes);
    time.addSeconds(seconds);
    time.displayTime();
  });
  
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];
  const days = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];

  function currendDate() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    day = now.getDay();
    date = now.getDate();
    month = now.getMonth();
    year = now.getFullYear();
    document.getElementById("date").innerHTML =
      "Дата: " + date + " " + months[month] + " " + year + " року";
    document.getElementById("day").innerHTML = "День тижня: " + days[day];
    document.getElementById("time").innerHTML =
      "Час: " +
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes;
  }
  function getDayInfo(dateObject) {
    let dayNumber = dateObject.getDay();
    let dayName = days[dayNumber];
    dayNumber = dayNumber === 0 ? 7 : dayNumber;
    return { dayNumber, dayName };
  }
  document.getElementById("num-and-name_button").onclick = function () {
    let dateObject = new Date();
    let dayInfo = getDayInfo(dateObject);
    document.getElementById("day_num").innerHTML =
      "Номер дня тижня: " + dayInfo.dayNumber;
    document.getElementById("day_name").innerHTML =
      "Назва дня тижня: " + dayInfo.dayName;
  };

  document.getElementById("find-date_button").onclick = function () {
    let daysN = document.getElementById("days_n").value;
    let dateN = new Date();
    let dateCase =
      daysN > 0
        ? "Майбутня дата: "
        : daysN < 0
        ? "Минула дата: "
        : "Сьогодні: ";

    dateN.setDate(dateN.getDate() + parseInt(daysN));
    document.getElementById("date_n").innerHTML =
      dateCase +
      dateN.getDate() +
      " " +
      months[dateN.getMonth()] +
      " " +
      dateN.getFullYear() +
      " року";
  };

  function getLastDayOfMonth(year, month) {
    let lastDay = new Date(year, month, 0);
    return lastDay.getDay();
  }
  document.getElementById("find-last-day_button").onclick = function () {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let lastDay = getLastDayOfMonth(year, month);
    document.getElementById("last-day").innerHTML =
      "Останній день місяця: " + days[lastDay];
  };
  function getSeconds() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    secondsNow = hours * 3600 + minutes * 60 + seconds;
    secondsLeft = 86400 - secondsNow;
    return { secondsNow, secondsLeft };
  }
  document.getElementById("find-seconds_button").onclick = function () {
    let seconds = getSeconds();
    document.getElementById("seconds_now").innerHTML =
      "Секунд пройшло: " + seconds.secondsNow;
    document.getElementById("seconds_left").innerHTML =
      "Секунд залишилось: " + seconds.secondsLeft;
  };
  