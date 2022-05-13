window.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body")

    const hola = 4
    const n = ["hola", "mundo"]
    const f = "alsdasdkjsldk"
    const div = document.createElement("div")

    console.log(typeof div)
    console.log(typeof n)
    console.log(typeof hola)
    console.log(typeof f)

    body.appendChild(div)
    div.innerHTML = "algo asì"
})