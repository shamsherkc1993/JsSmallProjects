function inputFunction(e) {
  let newValue = e.value;
  let splitedValue = newValue.split(" ");
  //   console.log(splitedValue.length);
  document.getElementById("newText").innerHTML = newValue;
  document.getElementById("character").innerHTML = newValue.length;
  document.getElementById("word").innerHTML = splitedValue.length;

  if (newValue.length >= 1) {
    document.getElementById("newText").style.display = "block";
  } else {
    document.getElementById("newText").style.display = "none";
  }
}
