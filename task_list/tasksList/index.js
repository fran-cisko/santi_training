/*

    -- Ejercicio --

    Agregar las siguientes lineas en el lugar que corresponde.
    El programa tiene que permitir agregar tareas y borrarlas
    clickeando el botón borrar correspondiente a cada una de las tareas.
    Ayuda: Tratar de usar el programa y ver que errores tira

    1) tasks.appendChild(newTask)

    2) event.target.closest(".task").remove()

    3) const taskRemoveButton = document.createElement("a")

*/

window.addEventListener("DOMContentLoaded", () => {
    setInitialBehavior()
    console.log("log a. 3")
})

function setInitialBehavior() {
    console.log("log b 2")

    
    const newTaskInput  = document.querySelector('.new_task')
    const addTaskButton = document.querySelector('.add_task')
    const tasks         = document.querySelector('.tasks')
    

    //newTaskInput.focus()

    newTaskInput.addEventListener("keyup", event => {

        console.log(event)

        if (event.target.value.length > 0) {
            addTaskButton.removeAttribute('disabled')
        }
        else {
            addTaskButton.setAttribute('disabled', true)
        }

        if (event.keyCode == 13) {
            addTaskButton.click()
            event.target.value = ''
        }
    })

    addTaskButton.addEventListener("click", () => {
        const newTask = createNewTask(newTaskInput.value)
        tasks.appendChild(newTask)
    
    })

}

function createNewTask(content) {

    const newTask = document.createElement("div")
    const taskText = document.createElement("div")
    const taskRemoveButton = document.createElement("a")


    newTask.classList.add('task')

    taskText.classList.add('content')
    taskText.innerHTML = content

    taskRemoveButton.classList.add('remove')
    taskRemoveButton.innerHTML = 'borrar'
    taskRemoveButton.setAttribute('href','#')

    newTask.appendChild(taskText)
    newTask.appendChild(taskRemoveButton)
    

    taskRemoveButton.addEventListener("click", event => {
        event.target.closest(".task").remove()
    });

    return newTask
 

}
console.log("log c 1")