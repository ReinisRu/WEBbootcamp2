let card_positions = {};

function randNumber(n) {
  return Math.floor(Math.random() * (n - 1)) + 1;
}

function getKey(key) {
  if (key in card_positions) {
    key = key - 1;
    if (key === 0) {
      key = 20;
    }
    return getKey(key);
  }
  return key;
}

for (let i = 20; i >= 1; i--) {
  let rand_number = randNumber(i);

  let card_value = i;

  if (card_value > 10) {
    card_value = card_value - 10;
  }
  card_positions[getKey(rand_number)] = card_value;
}

console.log(card_positions);

for (let i = 1; i <= 20; i++) {
  let element = document.createElement("div");
  element.setAttribute("data-value", card_positions[i]);

  document.querySelector(".container").append(element);
}

let cards = document.querySelectorAll(".container div");

let last_card = false;
let game_on = true;
for (let card of cards) {
  card.addEventListener("click", function () {
    if (game_on === true) {
      showCardValue(card);

      if (
        last_card !== false &&
        last_card != card &&
        last_card.getAttribute("data-value") === card.getAttribute("data-value")
      ) {
        card.classList.add("active");
        last_card.classList.add("active");
        addRestartButton();
        game_on = false;
      }
      last_card = card;
    }
  });
}

function showCardValue(card) {
  card.textContent = card.getAttribute("data-value");
  setTimeout(function () {
    card.textContent = "";
  }, 1000);
}

function addRestartButton() {
  let button = document.createElement("button");
  button.textContent = "Reset";
  button.addEventListener("click", function () {
    location.reload();
  });

  document.querySelector("body").append(button);
}
