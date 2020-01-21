function startTime() {
    var today = new Date();
    today.toLocaleString();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();
    document.querySelector('.time').innerHTML =
    h + ":" + m;
    document.querySelector('.date').innerHTML =
    day + " " + date + " " + month;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }