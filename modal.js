var newModal = document.getElementById("newModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  newModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == newModal) {
    newModal.style.display = "none";
  }
}

