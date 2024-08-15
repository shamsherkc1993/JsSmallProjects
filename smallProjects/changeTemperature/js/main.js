function inputFunction(e) {
  let enteredCelsuis = e.value;
  let convertCtoF = (enteredCelsuis * 9) / 5 + 32;
  const selectFPara = (document.getElementById("feranheit").innerHTML =
    convertCtoF + " °F");
  if (e.value >= 1) {
    document.getElementById("degreediv").style.display = "block";
  }
}
function feranheitFunction(e) {
  let enterFerenheit = e.value;
  let convertFtoC = ((enterFerenheit - 32) * 5) / 9;
  const selectPara = (document.getElementById("degree").innerHTML =
    convertFtoC + " °C");
  if (e.value >= 1) {
    document.getElementById("fereinheitdic").style.display = "block";
  }
}
