let cards = document.querySelectorAll(".container div");

let last_card = false;
let game_on = true;
for (let card of cards) {
  card.addEventListener("click", function () {
    if (game_on === true) {
      if (
        last_card !== false &&
        last_card !== card &&
        last_card.textContent === card.textContent
      ) {
        card.style.background = "lightgreen";
        last_card.style.background = "lightgreen";
        addRestartButton();
        game_on = false;
      }
      last_card = card;
    }
  });
}

function addRestartButton() {
  let button = document.createElement("button");
  button.textContent = "Reset";
  button.addEventListener("click", function () {
    location.reload();
  });

  document.querySelector("body").append(button);
}
