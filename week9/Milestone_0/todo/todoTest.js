// requires todo.js
// requires /util/test.js

test("todo-crud", assert => {

    // setup
    todoContainer = document.createElement("div");
    numberOfTasks = document.createElement("span");
    numberOfTasks.innerText = '0';
    openTasks = document.createElement("span");
    openTasks.innerText = '0';

    startTodo(todoContainer, numberOfTasks, openTasks);

    const elementsPerRow = 2;

    assert.equals(todoContainer.children.length, 0*elementsPerRow);
    assert.equals(numberOfTasks.innerText, '0');
    assert.equals(openTasks.innerText, '0');

    addTodo();

    assert.equals(todoContainer.children.length, 1*elementsPerRow);
    assert.equals(numberOfTasks.innerText, '1');
    assert.equals(openTasks.innerText, '1');

    addTodo();

    assert.equals(todoContainer.children.length, 2*elementsPerRow);
    assert.equals(numberOfTasks.innerText, '2');
    assert.equals(openTasks.innerText, '2');

    const firstCheckbox = todoContainer.querySelectorAll("input[type=checkbox]")[0];
    assert.equals(firstCheckbox.checked, false);

    firstCheckbox.click();

    // open task verminden und checked ist nun true
    assert.equals(firstCheckbox.checked, true);

    assert.equals(numberOfTasks.innerText, '2'); // bleibt gleich
    assert.equals(openTasks.innerText, '1'); // hat sich verringert

    // add a test for the deletion of a todo-item

});