async function login() {
    let msgDOM = document.getElementById("msg");
    msgDOM.textContent = "";
    try {
        let name = document.getElementById("name").value;
        let pass = document.getElementById("password").value;
        let result = await requestLogin(name,pass);
        if (result.err) {
            msgDOM.textContent = "An error occurred";
        } else if (!result.successful) {
            msgDOM.textContent = "Wrong username or password";    
        } else {
            msgDOM.textContent = "Login successful!";    
            window.location.pathname = "/profile.html"
        }
    } catch (err) {
        console.log(err);
        msgDOM.textContent = "An error occurred";
    }
}

async function register() {
    let msgDOM = document.getElementById("Reg-msg");
    msgDOM.textContent = "";
    try {
        let name = document.getElementById("Reg-name").value;
        let email = document.getElementById("Reg-email").value;
        let pass = document.getElementById("Reg-password").value;
        let res = await requestRegister(name,email,pass);
        if (res.successful) {
            msgDOM.textContent = "Conta criada.";
            window.location.pathname = "/login.html"
        } else {
            msgDOM.textContent = "Nao foi possivel registar, Username ou email ja utilizado. ";
        }      
    } catch (err) {
        console.log(err);
        msgDOM.textContent = "An error occurred";   
    }
}


let cont = document.getElementById('cont')

toggle = () => {
	cont.classList.toggle('sign-in')
	cont.classList.toggle('sign-up')
}

setTimeout(() => {
	cont.classList.add('sign-in')
}, 200)

