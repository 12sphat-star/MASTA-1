document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("book-modal");
  const openButtons = [
    document.getElementById("get-book-top"),
    document.getElementById("get-book-bottom")
  ];
  const closeButton = document.getElementById("close-modal");

  openButtons.forEach(button => {
    if (button) {
      button.addEventListener("click", function () {
        modal.classList.remove("hidden");
      });
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

});
