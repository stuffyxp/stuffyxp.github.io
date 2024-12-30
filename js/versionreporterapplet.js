function showVersion() {
  var x = document.getElementById("version");
  if (x.innerHTML === "") {
    x.innerHTML = "StuffyXP Website \"Better Late than Never\" Version 2.1.1.2094.main.241224-2005, Bulma v1.0.0 & Jekyll v4.3.3";
  } else {
    x.innerHTML = "";
  }
}
