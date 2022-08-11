let billAmount = document.getElementById("bill-amount");
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total");
let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset");

function clearField() {
  document.getElementById("bill-amount").value = "";
  document.getElementById("tip-amount").value = "";
  document.getElementById("total").value = "";
}

calculate.addEventListener("click", function () {
  billAmount = parseFloat(billAmount.value);


  if (isNaN(billAmount) || billAmount <= 1 || billAmount === null) {
    alert("Please enter a valid number for the bill amount");

  } else {
    let calculateTotal = parseFloat(billAmount + calculateTip);
    totalAmount.value = `₵ ${calculateTotal}`;
  }
});