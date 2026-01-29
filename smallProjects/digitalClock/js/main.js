function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let period = document.getElementById("period");

  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const ampm = h >= 12 ? "PM" : "AM";

  console.log(h);

  // if (h > 12) {
  //   h = h - 12;
  // }

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  hour.innerText = h;
  period.innerText = ampm;
}

setInterval(clock, 1000);
