document.getElementById('deposit-button').addEventListener('click',function(){
const depositInputFeild=document.getElementById('deposit-input');
// console.log(depositInputFeild);

const depositeText=depositInputFeild.value;
const newDepositAmount=parseFloat(depositeText);
//  console.log(newDepositAmount);

const depositTotal= document.getElementById('deposit-total');
const priviousDepositTotalText=depositTotal.innerText;

const priviousDepositTotalAmount=parseFloat(priviousDepositTotalText);


const newDepositTotal= priviousDepositTotalAmount+newDepositAmount;

depositTotal.innerText=newDepositTotal;


// update balance

const balanceTotal= document.getElementById('balace-input');
const balanceTotalText=balanceTotal.innerText ;
const balanceTotalAmount=parseFloat( balanceTotalText);


const newBalanceTotal=balanceTotalAmount+newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

// clear form
depositInputFeild.value='';

})


document.getElementById('withdraw-button').addEventListener('click',function(){
// console.log('withdrw button clicked');

const withdrawInputFeild=document.getElementById('withdraw-input');

const withdrawInputText=withdrawInputFeild.value;
const withdrawInputAmount=parseFloat( withdrawInputText);

// withdrawtotal
const withdrawTotal=document.getElementById('withdraw-total')
const withdrawTotalText=withdrawTotal.innerText;

const withdrawTotalAmount=parseFloat( withdrawTotalText)

const newWithdrawTotal=withdrawInputAmount+withdrawTotalAmount;

withdrawTotal.innerText=newWithdrawTotal;


// update balance

const balanceTotal= document.getElementById('balace-input');
const priviousBalanceTotalText=balanceTotal.innerText ;
const balanceTotalAmount=parseFloat(priviousBalanceTotalText);


const newTotalAmount=balanceTotalAmount- withdrawInputAmount;
balanceTotal.innerText=newTotalAmount;


withdrawInputFeild.value='';
})













