const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI () {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  if (isNaN(heightValue) || isNaN(weightValue)) {
    bmiInputEl.value = "";
    weightConditionEl.innerText = "";
    alert("Please enter valid input for height and weight.");
    return;
  }

  if (heightValue < 0 || weightValue < 0) {
    bmiInputEl.value = "";
    weightConditionEl.innerText = "";
    alert("Height and weight must be positive numbers.");
    return;
  }
  const bmiValue = (weightValue/(heightValue*heightValue)).toFixed(2);
  bmiInputEl.value = bmiValue;

  if (bmiValue< 18.5){
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9){
    weightConditionEl.innerText="Normal Weight";
  } else if (bmiValue>= 25 && bmiValue<= 29.9){
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue>=30) {
    weightConditionEl.innerText = "Obesity";
  }
}


btnEl.addEventListener("click", calculateBMI);