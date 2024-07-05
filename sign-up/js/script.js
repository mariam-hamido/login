var signUpName= document.getElementById('signName');
var signUpPass= document.getElementById('signPassword');
var signUpEmail= document.getElementById('signEmail');
var user=[];

if (localStorage.getItem('user')!=null){
    user= JSON.parse(localStorage.getItem('user'))
}else{
    user=[];
}

function add(){
    if( signUpName.value==''||signUpEmail.value==''||signUpPass.value==''){
        document.getElementById('message').innerHTML=`<p> all inputs is required</p>`
    }else{
        var info={
            userName:signUpName.value,
            userEmail:signUpEmail.value,
            userPass:signUpPass.value
            
        }
        user.push(info);
        location.href="../../log-in/index.html"
        localStorage.setItem('user', JSON.stringify(user));
    }
}