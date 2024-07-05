document.getElementById('userName').innerHTML = localStorage.getItem('userN')


document.getElementById('logBtn').addEventListener('click', function(){
    localStorage.removeItem('userName')
})