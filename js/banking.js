
var depositInputValue;
function calculate (inputId, showId) {
    
    var depo = document.getElementById(inputId).value;
     depositInputValue = parseFloat(depo);
    var depositText = document.getElementById(showId).innerText;
    var previousDeposit = parseFloat(depositText);
    var newDeposit = previousDeposit;
    newDeposit = newDeposit + depositInputValue;
    document.getElementById(showId).innerText = newDeposit;
    document.getElementById(inputId).value = "";
    return depositInputValue;
}
//deposit function 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // var depositText = document.getElementById('deposit-value').innerText;
    // var previousDeposit = parseFloat(depositText);
    // var depo = document.getElementById('deposit').value;
    // var depositInputValue = parseFloat(depo);
    // var newDeposit = previousDeposit;
    // newDeposit = newDeposit + depositInputValue;
    // document.getElementById('deposit-value').innerText = newDeposit;
    // document.getElementById('deposit').value = "";
    
    calculate('deposit', 'deposit-value');

    //balance add by deposit
    var balanceText = document.getElementById('balance').innerText;
    var previousBalance = parseFloat(balanceText);
    var newBalance =  previousBalance + depositInputValue;
    document.getElementById('balance').innerText = newBalance;
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // var withdrawText = document.getElementById('withdraw-value').innerText;
    // var previousWithdraw = parseFloat(withdrawText);
    // var depo = document.getElementById('withdraw').value;
    // var withdrawInputValue = parseFloat(depo);
    // var newDeposit = previousWithdraw;
    // newDeposit = newDeposit + withdrawInputValue;
    // document.getElementById('withdraw-value').innerText = newDeposit;
    // document.getElementById('withdraw').value = "";

    calculate('withdraw', 'withdraw-value');

    //balance add by withdraw
    var balanceText = document.getElementById('balance').innerText;
    var previousBalance = parseFloat(balanceText);
    var newBalance =  previousBalance - depositInputValue;
    document.getElementById('balance').innerText = newBalance;
});

