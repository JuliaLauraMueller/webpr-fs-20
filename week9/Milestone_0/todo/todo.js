
let todoContainer = null;
let numberOfTasks = null;
let openTasks     = null;

// Konstruktor
function startTodo(newTodoContainer, newNumberOfTasks, newOpenTasks) {
    todoContainer = newTodoContainer;
    numberOfTasks = newNumberOfTasks;
    openTasks     = newOpenTasks;
}

function addTodo() {

    // Input für den Text im container selber
    const inputElement = document.createElement('INPUT');
    inputElement.setAttribute("TYPE","TEXT");
    inputElement.setAttribute("SIZE","42");

    const checkboxElement = document.createElement('INPUT');
    checkboxElement.setAttribute("TYPE", "CHECKBOX");

    checkboxElement.onclick = _ => {
        openTasks.innerText = Number(openTasks.innerText) + (checkboxElement.checked ? -1 : 1);
    };

    // Grind angeordnet sind diese Elemente nacheinander
    todoContainer.appendChild(inputElement);
    todoContainer.appendChild(checkboxElement);

    // Statistik updated und hochzählen. String in zahl umwandeln
    numberOfTasks.innerText = Number(numberOfTasks.innerText) + 1;
    openTasks.innerText     = Number(openTasks.innerText) + 1;

}
