function showVersion() {
  var x = document.getElementById("version");
  if (x.innerHTML === "") {
    x.innerHTML = "StuffyXP Website \"One Last Fix\" Version 2.1.2.2100.main.250212-0923, Bulma v1.0.0 & Jekyll v4.3.3";
  } else {
    x.innerHTML = "";
  }
}
