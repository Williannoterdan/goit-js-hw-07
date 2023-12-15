let formas = document.querySelector("form.login-form");
console.log(formas);
let baseUser = { email: "", password: "" };
formas.addEventListener("submit", event => {
    event.preventDefault()
        console.log("SASA")
    let emailos = formas.querySelector("label").querySelector("input").value.trim()
    console.log(emailos)
    console.log(emailos)
    let passwordos = formas.lastChild.previousSibling.previousSibling.previousSibling.querySelector("input").value.trim()
    console.log(passwordos)
    console.log(passwordos)
    if (emailos.length > 0 && passwordos.length > 0) {
        baseUser = { email: emailos, password: passwordos }
        let emailoss = formas.querySelector("label").querySelector("input").defaultValue
        console.log(emailoss)
            console.log(baseUser)
        }
    else {
        let message = "sda";
     window.alert(message);   
    }
});

