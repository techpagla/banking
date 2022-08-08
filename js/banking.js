
var depositInputValue;
function calculate (inputId, showId) {
    
    var depo = document.getElementById(inputId).value;
     depositInputValue = parseFloat(depo);
    var depositText = document.getElementById(showId).innerText;
    var previousDeposit = parseFloat(depositText);
    var newDeposit = previousDeposit;
    newDeposit = newDeposit + depositInputValue;
    console.log(depositInputValue);
    if(depositInputValue > 0){
        document.getElementById(showId).innerText = newDeposit;
        document.getElementById(inputId).value = "";
        return depositInputValue;
    }
    
}

//Totall banlance function
  function totallBalance(symbol){
    var balanceText = document.getElementById('balance').innerText;
    var previousBalance = parseFloat(balanceText);
    if(symbol == true && depositInputValue > 0 ) {
        var newBalance =  previousBalance + depositInputValue;
        document.getElementById('balance').innerText = newBalance;
    }
    else if(symbol == false && depositInputValue > 0 && depositInputValue < previousBalance) {
        var newBalance =  previousBalance - depositInputValue;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert(depositInputValue + " is not a valid amount!");
    }
    
  }
//deposit function 
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    calculate('deposit', 'deposit-value');

    //balance add by deposit
    var symbol = true;
    totallBalance(symbol);
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
         
            calculate('withdraw', 'withdraw-value');
            var symbol = false;

            //balance add by withdraw
            totallBalance(symbol);
   
});

