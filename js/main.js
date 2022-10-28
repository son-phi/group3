function dropbtnfeature() {
  document.getElementById("tsdropdown").classList.toggle("showgrid");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".tsdropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showgrid")) {
        openDropdown.classList.remove("showgrid");
      }
    }
  }
  // đóng modalbox khi click ra ngoài
  if (event.target.className == "tsmodal") {
    event.target.style.display = "none";
  }
};
// mở đóng modalbox
var modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".tsmodal").style.display = "none");
  };
});
