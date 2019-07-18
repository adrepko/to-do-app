function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    // create new remove input
    let remove = document.createElement('input');

    // set the input's type to button and value to Delete
    remove.type = "button";
    remove.value = "Delete";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the button to the li
    newLi.appendChild(remove);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    // click remove to delete li
    remove.addEventListener('click', () => {
      event.preventDefault();

      newLi.parentNode.removeChild(newLi);
    })

    })
  }

window.onload = function() {
  alert("The window has loaded!");
  onReady();
}
