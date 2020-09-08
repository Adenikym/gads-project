let modal=document.getElementById("my-modal");

document.getElementById("close").addEventListener("click", function () {
    modal.style.display="none"
});

document.getElementById("ham").addEventListener("click", function () {
    modal.style.display="flex"
});

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

 