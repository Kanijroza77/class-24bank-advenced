function getInput(inputId){
    const inputFeild=document.getElementById(inputId);
    const inputText= inputFeild.value ;
    const inputAmount=parseFloat(inputText);
    console.log(inputAmount);
    inputFeild.value="";
    return  inputAmount;
}

function updateTotal(updateId,newTotalAmount){
const updateTotal=document.getElementById(updateId)
const updateText=updateTotal.innerText;
const updateAmount=parseFloat(updateText)
updateTotal.innerText= updateAmount+newTotalAmount;
}

function getCurrentBalance(){
    const balanceTotal=document.getElementById('balace-input');
    const balanceTotalText= balanceTotal.innerText;
    const balanceTotalAmount=parseFloat( balanceTotalText)    
    return  balanceTotalAmount;
}

function updateBalance(ammount,isAdd){

const balanceTotal=document.getElementById('balace-input');
const previousBalanceTotalAmount=getCurrentBalance()
if(isAdd==true){
    balanceTotal.innerText= previousBalanceTotalAmount+ammount;
}else{
    balanceTotal.innerText= previousBalanceTotalAmount-ammount;

}
}



document.getElementById('deposit-button').addEventListener('click',function(){
 const newDepositAmount=getInput('deposit-input')
if( newDepositAmount>0){
    updateTotal('deposit-total',newDepositAmount)
     updateBalance( newDepositAmount,true)}
})

document .getElementById("withdraw-button").addEventListener("click",function(){

    const newWithdrawAmount=getInput("withdraw-input")
    const currentBalance= getCurrentBalance()
if(newWithdrawAmount > 0 && newWithdrawAmount <=currentBalance ){
    updateTotal("withdraw-total",newWithdrawAmount);
    updateBalance(newWithdrawAmount,false)}


})



