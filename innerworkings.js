//counter for 1 by 1 addition of progress bar number.
const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);
// animation addition and removal for progress bars based on value.
let progress = document.getElementById('progress')
progress.classlist.add("progressA")
