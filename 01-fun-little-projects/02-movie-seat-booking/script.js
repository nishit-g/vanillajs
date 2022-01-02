const seatContainer = document.querySelector(".seat-container");
//Node list can be used as array
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const movieSelector = document.getElementById("movie-selector");

const updateInfo = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;

  const seatsTextEle = document.getElementById("total-seats");
  seatsTextEle.innerText = selectedSeatsCount;

  const totalPriceEle = document.getElementById("total");
  totalPriceEle.innerText = selectedSeatsCount * movieSelector.value;
};

seatContainer.addEventListener("click", (e) => {
  const isSelectableSeat =
    !e.target.classList.contains("occupied") &&
    e.target.classList.contains("seat");

  if (isSelectableSeat) {
    e.target.classList.toggle("selected");
    updateInfo();
  }
});
