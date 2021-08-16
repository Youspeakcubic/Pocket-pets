let count = 0;
let hunger = 100;
let thirst = 100;
let happiness = 0;
let coins = 100;
let dog = document.getElementById('dog');
let hungerProgress = document.getElementById('progressBarHung');
let thirstProgress = document.getElementById('progressBarThir');
let happinessProgress = document.getElementById('progressBarHapp');
let coinTab = document.getElementById('coinsTab');
let poopSprite = document.getElementById('dogPoop');
let peeSprite = document.getElementById('dogPee');
let foodBowl = document.getElementById('dogFood');
let waterBowl = document.getElementById('dogWater');
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
    poopSprite.style.left = randomNumber(22, 50) + "vw";
    poopSprite.style.top = randomNumber(15,30) + "vh";
    poopSprite.style.display = "block";
  }
  else if (fecesType == 2){
    console.log("poop2");
    peeSprite.style.left = randomNumber(10, 30) + "vw";
    peeSprite.style.top = randomNumber(5,20) + "vh";
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
    peeSprite.style.display = "none"
  }
}

let replenish = (type) => {
  if(type == 1 ) {
    console.log("succ1");
    foodBowl.src="dopFood.jpg";
    dog.className = 'dogSprite dogSpriteAnimFeed'
    coins -= 20;
    console.log("succ2");
    hunger += 30;
    if (coins < 0) { coins = 0;};
    if (hunger > 100) { hunger = 100;};
    hungerProgress.style.width = hunger + "%";
    coinTab.textContent = coins
    setTimeout(function(){
      replenishReversal(1);
    }, 10000)
  }
  else if (type == 2) {
    waterBowl.src="dogWater.jpg";
    dog.className = 'dogSprite dogSpriteAnimFeed'
    coins -= 10;
    thirst += 30;
    if (coins < 0) { coins = 0;};
    if (thirst > 100) { thirst = 100;}
    thirstProgress.style.width = thirst + "%";
    coinTab.textContent = coins
    setTimeout(function(){
      replenishReversal(2);
    }, 10000)
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
let replenishReversal = (type) => {
  if (type == 1) {
    console.log("succ3");
    foodBowl.src="emptybowl.jpg";
    dog.className = 'dogSprite dogSpriteAnimMain'
  }
  else if (type == 2){
    waterBowl.src="emptybowl.jpg";
    dog.className = 'dogSprite dogSpriteAnimMain'
  }
};
setInterval(time, 15000);
setInterval(poopGen,40000);
