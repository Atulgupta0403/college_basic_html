const down = document.querySelector(".down");
const login = document.querySelector(".login");
const reset = document.querySelector(".reset");
const input1 = document.querySelector(".down .container .username")
const input2 = document.querySelector(".down .container .password")



login.addEventListener("click",() => {
    down.classList.remove("none")
})

reset.addEventListener("click",() => {
    
    input1.value = ""
    input2.value = ""
})