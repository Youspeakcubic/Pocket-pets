let count = 0;
let hunger = 100;
let thirst = 100;
let happiness = 0;
let coins = 100;
let hungerProgress = document.getElementById('progressBarHung')
let thirstProgress = document.getElementById('progressBarThir')
let happinessProgress = document.getElementById('progressBarHapp')
let time = () => {
if(hunger <= 0 || thirst <= 0) {
  alert("Your pet is dying, please take care of them ;(")
}
else{
  thirst -= .5
  hunger -= 1.5
  happiness = (thirst + hunger)/2
  console.log(hunger, happiness, thirst);
  hungerProgress.style.width = hunger + "%";
  thirstProgress.style.width = thirst + "%";
  happinessProgress.style.width = happiness + "%";
}};
setInterval(time, 10000);

let replenish = (attribute) => {
  console.log(attribute)
  attribute += 30;
  console.log(attribute);
}
