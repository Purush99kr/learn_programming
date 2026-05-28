const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // this is to stop the default events occuring while form submission

  const height = parseInt(document.querySelector("#height").value); //fetch the height value after converting it into an INT
  const weight = parseInt(document.querySelector("#weight").value); ////fetch the weight value after converting it into an INT
  const results = document.querySelector("#results");
  const guide = document.querySelector("#guide");

  //height and weight use cases validations
  if (height === " " || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === " " || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>BMI = ${bmi}</span>`;
  }

  //BMI Calculation globally
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  //printing guide wrt BMI of the users
  if (bmi > 24.9) {
    guide.innerHTML = `<span> Overweight Case</span>`;
  } else if (bmi < 18.6) {
    guide.innerHTML = `<span> Underweight Case</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    guide.innerHTML = `<span> Normal Case</span>`;
  }
});

// const resetBtn = document.querySelector("#reset");
// resetBtn.addEventListener("click", (e) => {
//     //clear input fileds
//     document.querySelector('#height').value = "";
//     document.querySelector('#weight').value = "";

//     //clear results
//     document.querySelector('#results').innerHTML = "";

//     //clear guide
//     document.querySelector(#guide).innerHTML = "";

// });
