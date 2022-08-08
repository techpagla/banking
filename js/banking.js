
var inputValue;
function calculate (inputId, showId) {
    
    var depo = document.getElementById(inputId).value;
     inputValue = parseFloat(depo);
    var depositOrWithdrawText = document.getElementById(showId).innerText;
    var previousDepositOrWithdraw = parseFloat(depositOrWithdrawText);
    var newDepositOrWithdraw = previousDepositOrWithdraw;
    newDepositOrWithdraw = newDepositOrWithdraw + inputValue;
    console.log(inputValue);
    if(inputValue > 0){
        document.getElementById(showId).innerText = newDepositOrWithdraw;
        document.getElementById(inputId).value = "";
        return inputValue;
    }
    
}

//Totall banlance function
  function totallBalance(symbol){
    var balanceText = document.getElementById('balance').innerText;
    var previousBalance = parseFloat(balanceText);
    if(symbol == true && inputValue > 0 ) {
        var newBalance =  previousBalance + inputValue;
        document.getElementById('balance').innerText = newBalance;
    }
    else if(symbol == false && inputValue > 0 && inputValue < previousBalance) {
        var newBalance =  previousBalance - inputValue;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert(inputValue + " is not a valid amount!");
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

