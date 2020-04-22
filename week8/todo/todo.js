
function startTodo() {

}

function addTodo() {
    let container = document.getElementById("todoContainer");
    // innere Verkettung im HTML todo
    container.innerHTML += `    
    <tr>
        <td> <input type="text" value="empty"> </td>
        <td> <input type="checkbox"> </td>
    </tr>
`

    
}
