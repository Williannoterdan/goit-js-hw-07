let formas = document.querySelector("form.login-form");
// console.log(formas);
let baseUser = { email: "", password: "" };
formas.addEventListener("submit", event => {


    event.preventDefault()
    let emailos = event.target.email.value
    let passwordos = event.target.password.value
    if (emailos.length > 0 && passwordos.length > 0) {
        baseUser = { email: emailos, password: passwordos }
            console.log(baseUser)
            document.querySelector(".login-form").reset()

        }
    else {
        let message = "All form fields must be filled in";
     window.alert(message);   
    }
});

