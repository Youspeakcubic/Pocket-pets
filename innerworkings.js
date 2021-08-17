let count = 0;
let hunger = 100;
let thirst = 100;
let happiness = 0;
let coins = 100;
let dog = document.getElementById('dog');
let dog2 = document.getElementById('dog2');
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
  let animNumber = Math.round(randomNumber(0,3));
  console.log(animNumber);
  if (animNumber == 0) {
    dog.className = 'dogSprite dogSpriteAnimMain';
    dog.src = "dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimMain3';
    dog2.src = "dogsprite.gif";
  }
  else if (animNumber == 1){
    dog.className = 'dogSprite dogSpriteAnimMain2';
    dog.src = "dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimMain';
    dog2.src = "dogsprite.gif";
  }
  else if (animNumber == 2) {
    dog.className = 'dogSprite dogSpriteAnimMain3';
    dog.src = "dogsprite.gif";
    dog2.className = 'dogSprite2 dogSpriteAnimSleep';
    dog2.src = "dogsleep.gif";
  }
  else if (animNumber == 3){
    dog.className = 'dogSprite dogSpriteAnimSleep';
    dog.src = "dogsleep.gif"
    dog2.className = 'dogSprite2 dogSpriteAnimMain2';
    dog2.src = "dogsprite.gif";
  }
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
    poopSprite.style.left = randomNumber(25, 50) + "vw";
    poopSprite.style.top = randomNumber(15,30) + "vh";
    poopSprite.style.display = "block";
  }
  else if (fecesType == 2){
    console.log("poop2");
    peeSprite.style.left = randomNumber(25, 30) + "vw";
    peeSprite.style.top = randomNumber(15,20) + "vh";
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
    if (coins < 20) {

    }
    else if (coins >= 20) {
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
  }
  else if (type == 2) {
    if (coins < 10) {

    }
    else if (coins >= 10) {
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
let addPuppy = () => {
  if (coins < 250) {

  }
  else if (coins >= 250) {
    dog2.style.display = "block"
    coins -= 250;
    coinTab.textContent = coins
  }
}
let addRug = () => {
  if (coins <= 50) {

  }
  else if (coins >= 50) {
    document.getElementById("dogRug").style.display = "block";
    coins -= 50;
    coinTab.textContent = coins
  }
  document.getElementById("dogRug").style.display = "block";
  coins -= 50;
}
let addHouse = () => {
  if (coins <= 500) {

  }
  else if (coins >= 500) {
    document.getElementById("dogHouse").style.display = "block";
    coins -= 500;
    coinTab.textContent = coins
  }
};
setInterval(time, 20000);
setInterval(poopGen,40000);
