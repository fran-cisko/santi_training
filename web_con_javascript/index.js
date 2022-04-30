window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".addTask").addEventListener("click", () => {
        const newTaskContent = document.querySelector("#newTaskContent").value
        if(newTaskContent.length > 0){
            const tasks = document.querySelector(".tasks")
            const newTask = document.createElement("div")
            newTask.innerHTML = newTaskContent
            tasks.appendChild(newTask)
            
        }
    })

    document.querySelector("#newTaskContent").addEventListener("keyup", (event) => {
        const input = event.target
        const button =  document.querySelector(".addTask")
        if(input.value.length > 0){
            button.removeAttribute("disabled")
        }
        else{
            button.setAttribute("disabled", true)
        }
    })
})