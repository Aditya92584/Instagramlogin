function func(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === 'aditya92584' && password === '123123'){
        alert('Successful!');
        window.location.assign("");
    } else {
        username.value=''
        password.value=''
        alert('Wrong entry. Invalid password!');
    }
}