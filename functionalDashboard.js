function getValueFromTheInputBox(id){
    const inputField = document.getElementById(id);
    const stringValue = inputField.value;
    const value = parseFloat(stringValue);
    inputField.value = ""; // clearing the input field. it should be before the return. otherwise it will not work
    return value;
}

function getValueFromTheCard(id){
    const valueInString = document.getElementById(id).innerText;
    const value = parseFloat(valueInString);
    return value;
}

function setInnerText(id, text){
    const theTag = document.getElementById(id);
    theTag.innerText = text;
    return theTag;
}

// deposit process using function
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function(){
    // getting the value from input box of deposit
    const depositAmount = getValueFromTheInputBox('deposit-amount');

    // updating the total deposit field
    const previousDeposit = getValueFromTheCard("current-deposit");

    // update total deposit
    const newDepositAmount = previousDeposit + depositAmount;
    // console.log(newDepositAmount);
    document.getElementById("current-deposit").innerText = newDepositAmount;

    // updating the total balance
    const previousBalance = getValueFromTheCard("current-balance");
    const newBalance = previousBalance + depositAmount;
    // console.log(newBalance);
    // document.getElementById("current-balance").innerText = newBalance;
    setInnerText("current-balance", newBalance);
})

const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener("click", function(){
    const withdrawValue = getValueFromTheInputBox("withdraw-amount");
    console.log(withdrawValue)

    const previousWithdraw = getValueFromTheCard("current-withdraw");

    const totalWithdraw = withdrawValue + previousWithdraw;

    document.getElementById("current-withdraw").innerText = totalWithdraw;

    // total balance section
    const previousBalance = getValueFromTheCard("current-balance");
    const newBalance = previousBalance - totalWithdraw;
    // console.log(newBalance);
    // document.getElementById("current-balance").innerText = newBalance;
    // not enough balance validation
   if(newBalance<0){
    alert("Not enough balance");
   } else{
    setInnerText("current-balance", newBalance);
   }
})