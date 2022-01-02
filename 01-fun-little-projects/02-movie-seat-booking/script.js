const seatContainer = document.querySelector(".seat-container");
//Node list can be used as array
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const movieSelector = document.getElementById("movie-selector");

const persistSelectedSeats = (selectedSeats) => {
  const selectedSeatsIdx = [...selectedSeats].map((selectedSeat) =>
    [...seats].indexOf(selectedSeat)
  );

  localStorage.setItem("@selectedSeats", JSON.stringify(selectedSeatsIdx));
};

const repopulateUI = () => {
  // Seats
  const selectedSeatsIdx = JSON.parse(localStorage.getItem("@selectedSeats"));

  if (selectedSeatsIdx !== null && selectedSeatsIdx.length > 0) {
    seats.forEach((seat, idx) => {
      if (selectedSeatsIdx.indexOf(idx) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  // Movie Selector

  const selectedMovieIndex = localStorage.getItem("@selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelector.selectedIndex = selectedMovieIndex;
  }
};

const persistSelecteMovie = () => {
  localStorage.setItem("@selectedMovieIndex", movieSelector.selectedIndex);
};

const updateInfo = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;

  persistSelectedSeats(selectedSeats);

  const seatsTextEle = document.getElementById("total-seats");
  seatsTextEle.innerText = selectedSeatsCount;

  const totalPriceEle = document.getElementById("total");
  totalPriceEle.innerText = selectedSeatsCount * movieSelector.value;

  persistSelecteMovie();
};

movieSelector.addEventListener("change", () => {
  updateInfo();
  persistSelecteMovie();
});

seatContainer.addEventListener("click", (e) => {
  const isSelectableSeat =
    !e.target.classList.contains("occupied") &&
    e.target.classList.contains("seat");

  if (isSelectableSeat) {
    e.target.classList.toggle("selected");
    updateInfo();
  }
});

repopulateUI();
updateInfo();
