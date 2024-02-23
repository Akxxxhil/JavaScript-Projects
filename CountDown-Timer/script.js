let inputBox = document.querySelector("#input-1");
let startButton = document.querySelector("#button-1");

startButton.addEventListener("click", function () {
  let final = parseInt(inputBox.value);
  let i = final;

  function countdown() {
    inputBox.value=i
    // console.log(i);
    // console.log("-");
    i--;
    if (i >= 0) {
      setTimeout(countdown, 1000);
    }
    else{
        inputBox.value="your time is over"
    }
  }

  countdown();
});


