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
function showTime() {
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
}
  
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
// 2.1
function currendDate() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  document.getElementById("date").innerHTML =
    "Дата: " + date + " " + months[month] + " " + year + " року";
  document.getElementById("day").innerHTML = "День тижня: " + days[day];
  document.getElementById("time").innerHTML =
    "Час: " +
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes;
}
// 2.2
function getDayInfo(dateObject) {
  let dayNumber = dateObject.getDay();
  let dayName = days[dayNumber];
  dayNumber = dayNumber === 0 ? 7 : dayNumber;
  return { dayNumber, dayName };
}
function showDayInfo() {
  let dateObject = new Date();
  let dayInfo = getDayInfo(dateObject);
  document.getElementById("day_num").innerHTML =
    "Номер дня тижня: " + dayInfo.dayNumber;
  document.getElementById("day_name").innerHTML =
    "Назва дня тижня: " + dayInfo.dayName;
}
// 2.3
function findDate() {
  let daysN = document.getElementById("days_n").value;
  let dateN = new Date();
  let dateCase =
    daysN > 0 ? "Майбутня дата: " : daysN < 0 ? "Минула дата: " : "Сьогодні: ";
    dateN.setDate(dateN.getDate() + parseInt(daysN));
    document.getElementById("date_n").innerHTML =
      dateCase +
      dateN.getDate() + " " +
      months[dateN.getMonth()] + " " +
      dateN.getFullYear() + " року";
}
// 2.4
function getLastDayOfMonth(year, month) {
  let lastDay = new Date(year, month, 0);
  return lastDay.getDay();
}
function showLastDay() {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let lastDay = getLastDayOfMonth(year, month);
  document.getElementById("last-day").innerHTML =
    "Останній день місяця: " + days[lastDay];
}
// 2.5
function getSeconds() {
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  secondsNow = hours * 3600 + minutes * 60 + seconds;
  secondsLeft = 86400 - secondsNow;
  return { secondsNow, secondsLeft };
}
function showSeconds() {
  let seconds = getSeconds();
  document.getElementById("seconds_now").innerHTML =
     "Секунд пройшло: " + seconds.secondsNow;
  document.getElementById("seconds_left").innerHTML =
    "Секунд залишилось: " + seconds.secondsLeft;
}
// 2.6
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const now = new Date();

  const timeDiff = now - date;
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60); 

  if (secondsDiff < 60) {
      return `${secondsDiff} сек. назад`;
  } else if (minutesDiff < 60) {
      return `${minutesDiff} хв. назад`;
  } else {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}
function showDate() {
  let date = document.getElementById("date_input").value;
  document.getElementById("date_output").innerHTML = formatDate(date);
}
