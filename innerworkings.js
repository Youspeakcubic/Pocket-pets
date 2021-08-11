let count = 0;
let hunger = 100;
let thirst = 100;
let happiness = 0;
let coins = 100;
let hungerProgress = document.getElementById('progressBarHung');
let thirstProgress = document.getElementById('progressBarThir');
let happinessProgress = document.getElementById('progressBarHapp');
let coinTab = document.getElementById('coinsTab');

let time = () => {
  if(hunger <= 0 || thirst <= 0) {
    alert("Your pet is dying, please take care of them ;(");
  }
  else{
    thirst -= .5;
    hunger -= 1.5;
    happiness = (thirst + hunger)/2;
    console.log(hunger, happiness, thirst);
    hungerProgress.style.width = hunger + "%";
    thirstProgress.style.width = thirst + "%";
    happinessProgress.style.width = happiness + "%";
  }};

setInterval(time, 10000);

let replenish = (type) => {
  if(type == 1 ) {
    coins -= 20;
    hunger += 30;
    if (coins < 0) { coins = 0;};
    if (hunger > 100) { hunger = 100;};
    hungerProgress.style.width = hunger + "%";
    coinTab.textContent = coins
  }
  else if (type == 2) {
    coins -= 10;
    thirst += 30;
    if (coins < 0) { coins = 0;};
    if (thirst > 100) { thirst = 100;}
    thirstProgress.style.width = thirst + "%";
    coinTab.textContent = coins
  }
  else if (type == 3) {
    coins -= 20;
    happiness += 30;
      if (coins < 0) { coins = 0;};
    if (happiness > 100) { happinness = 100;}
    happinessProgress.style.width = happiness + "%";
    coinTab.textContent = coins
  }
};
