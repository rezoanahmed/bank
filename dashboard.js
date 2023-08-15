// deposit and balance update
let deposit = document.getElementById('deposit');
deposit.addEventListener('click', function(){
    let depositAmountInput = document.getElementById('deposit-amount');
    let depositAmountString = depositAmountInput.value;
    let depositAmount = parseFloat(depositAmountString);

    depositAmountInput.value = "";

    let currentDeposit = document.getElementById('current-deposit');
    let currentDepositString = currentDeposit.innerText;
    let currentDepositAmount = parseFloat(currentDepositString);
    
    let totalDeposit = depositAmount + currentDepositAmount;

    currentDeposit.innerText = totalDeposit;

    // balance update
    var currentBalance = document.getElementById('current-balance');
    var currentBalanceString = currentBalance.innerText;
    var currentBalanceAmount = parseFloat(currentBalanceString);

    let totalBalance = depositAmount+currentBalanceAmount;

    currentBalance.innerText = totalBalance;

})

// withdraw and balance update
let withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click', function(){
    let withdrawAmountInput = document.getElementById('withdraw-amount');
    let withdrawAmountInputString = withdrawAmountInput.value;
    let withdrawAmount = parseFloat(withdrawAmountInputString);

    withdrawAmountInput.value = '';

    let currentWithdraw = document.getElementById('current-withdraw');
    let currentWithdrawValue = currentWithdraw.innerText;
    let currentWithdrawAmount = parseFloat(currentWithdrawValue);
    
    let totalWithdraw = withdrawAmount + currentWithdrawAmount;

    currentWithdraw.innerText = totalWithdraw;


    // balance update
    var currentBalance = document.getElementById('current-balance');
    var currentBalanceString = currentBalance.innerText;
    var currentBalanceAmount = parseFloat(currentBalanceString);

    let totalBalance = currentBalanceAmount- withdrawAmount;

    currentBalance.innerText = totalBalance;
})