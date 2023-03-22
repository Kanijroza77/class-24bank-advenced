document.getElementById('submit-button').addEventListener('click',function(){
    const userEmailFeild=document.getElementById('user-email');
const userEmail=userEmailFeild.value;

const userPasswordFeild=document.getElementById('user-password');
const userPassword=userPasswordFeild.value;
// console.log(userEmail,userPassword);

if(userEmail=='kanijrose@gmail.com' && userPassword==12345 ){

    window.location.href ="../banking.html";
}else{
    alert('email & password does not matched')
}

}
)