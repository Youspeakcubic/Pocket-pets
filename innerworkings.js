let count = 0;
let hunger = 100;
let thirst = 100;
let happiness = 0;
let coins = 100;
let hungerProgress = document.getElementById('progressBarHung');
let thirstProgress = document.getElementById('progressBarThir');
let happinessProgress = document.getElementById('progressBarHapp');
let coinTab = document.getElementById('coinsTab');
let poopSprite = document.getElementById('dogPoop');
let peeSprite = document.getElementById('dogPee');
let randomNumber = (min, max) =>{
  return Math.random() * (max-min) + min;
}

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

let poopGen = () => {
  let fecesType = Math.round(randomNumber(0,2));
  if (fecesType == 1) {
    console.log("poop1");
    poopSprite.style.left = randomNumber(50, 850) + "px";
    poopSprite.style.top = randomNumber(20,250) + "px";
    poopSprite.style.display = "block";
  }
  else if (fecesType == 2){
    console.log("poop2");
    peeSprite.style.left = randomNumber(50, 850) + "px";
    peeSprite.style.top = randomNumber(20,250) + "px";
    peeSprite.style.display = "block";
  }
}

let poopPickup = (type) => {
  coins += 20;
  coinTab.textContent = coins
  if (type == 1){
    poopSprite.style.display = "none";
  }
  else if (type == 2) {
    peeSprite.style.display = "none;"
  }
}

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
setInterval(time, 10000);
setInterval(poopGen,40000);
