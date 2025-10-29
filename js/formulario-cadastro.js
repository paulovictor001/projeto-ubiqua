/**
 * type user
 * @param {User} user 
 */

const form = document.getElementsByClassName("form")[0]

class User{
    constructor(name, cnpj, email, password, user_type){
        this.name = name;
        this.cnpj = cnpj;
        this.email = email;
        this.password = password;
        this.user_type = user_type;
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    let name = document.getElementById("input-name")
    let cnpj = document.getElementById("input-cnpj")
    let email = document.getElementById("input-email")
    let password = document.getElementById("input-password")
    let user_type = document.getElementById("input-user")

    const user = new User(name.value, cnpj.value, email.value, password.value, user_type.value)
    register(user)
    
})

function register(user){
    if (!localStorage.getItem("list-users")){
        let users = []
        localStorage.setItem("list-users", JSON.stringify(users))
    }

    let list_users = JSON.parse(localStorage.getItem("list-users"))
    list_users.push(user)
    localStorage.setItem("list-users", JSON.stringify(list_users))
    alert("registrado!")
}