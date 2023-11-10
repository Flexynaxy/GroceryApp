// dom call 
let email = document.querySelector("#lemail")
let password = document.querySelector("#lpassword")

let loginbtn = document.querySelector("#loginbtn")
let msg = document.querySelector("#msg")



loginbtn.addEventListener('click', LoginUser)


function LoginUser() {

    // email user enter
    let emailE = email.value
    let passE = password.value


    // get register user info from LocalStorage

    let emailLs = localStorage.getItem('email')
    let passwordLs = localStorage.getItem('password')

    //  verify user input

    if (!emailE || !passE) {
        msg.innerHTML = "<p class='alert alert-danger'> fill all required field </p>"
    }

    // if(emailE == emailLs && passE == passwordLs){
    //     alert("Login succesful")
    //         location.href = 'gracerykeeper.html'
    // }else{
    //     msg.innerHTML = "<p class='alert alert-danger'> email or password not correct </p>"
    // }

    if (emailE != emailLs || passE != passwordLs) {
        msg.innerHTML = "<p class='alert alert-danger'> email or password not correct </p>"
    } else {
        alert("Login succesful")
        location.href = 'gracerykeeper.html'
    }





}