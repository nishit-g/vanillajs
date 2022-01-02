const seatContainer = document.querySelector(".seat-container");
//Node list can be used as array
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

seatContainer.addEventListener("click", (e) => {
  const isSelectableSeat =
    !e.target.classList.contains("occupied") &&
    e.target.classList.contains("seat");

  if (isSelectableSeat) {
    e.target.classList.toggle("selected");
  }
});
