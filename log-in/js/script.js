var user=[];
user= JSON.parse(localStorage.getItem('user'))

var signPass= document.getElementById('signPassword');
var signEmail= document.getElementById('signEmail');

document.getElementById('login').addEventListener('click',function(){
    if (signEmail.value ==''||signPass.value==''){
        document.getElementById('message').innerHTML=`<p> all inputs is required</p>`
    }else{
        checkUser();
    }
})


function checkUser(){
    for (var i=0;i<user.length;i++){
       if(signEmail.value== user[i].userEmail && signPass.value==user[i].userPass){
        var y= user[i].userName
        localStorage.setItem('userN',y);
        location.href='../../Home/index.html'
        break;
       }
    }
}