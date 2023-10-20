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
  document.getElementById("add_time").addEventListener("click", () => {
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