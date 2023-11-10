// dom call
let username = document.querySelector("#susername")
let email = document.querySelector("#semail")
let password = document.querySelector("#spassword")
let confirmpassword = document.querySelector("#sconfirmpassword")
let registerbtn = document.querySelector("#sbtn")
let msg = document.querySelector("#msg")



//  signup innitialize
loadSignup()

function loadSignup() {

    registerbtn.addEventListener('click', SignupUser)
}



function SignupUser(e) {


    // get user input
    let uusername = username.value
    let upassword = password.value
    let ucpassword = confirmpassword.value
    let uemail = email.value


    if (uusername == '' || !upassword || !ucpassword || !uemail) {
        msg.innerHTML = "<p class='alert alert-danger'> fill all required field </p>"
    } else if (upassword !== ucpassword) {
        msg.innerHTML = "<p class='alert alert-danger'> password not thesame </p>"
    } else if (upassword.length <= 6) {
        msg.innerHTML = "<p class='alert alert-danger'> password must be six or more character </p>"

    } else {

        localStorage.setItem('username', uusername)
        localStorage.setItem('email', uemail)
        localStorage.setItem('password', upassword)

        alert("Register successful")
        location.href = 'index.html'

    }
    e.preventDefault()
}