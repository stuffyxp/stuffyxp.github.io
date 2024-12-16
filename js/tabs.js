function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("is-active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.parentElement.classList.add("is-active");

    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home").classList.add("is-active");
  });
  }