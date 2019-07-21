function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm')
  let id = 0;

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      toDoId: id
    });
    newToDoText.value = '';
    id++;
    console.log(toDos);
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDos){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const remove = document.createElement('input');
      remove.type = "button";
      remove.value = "Delete";

      newLi.textContent = toDos.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild (remove);

      remove.addEventListener('click', () => {
        event.preventDefault();
        const result = toDos.filter(toDos => toDos.id != id);
        renderTheUI();
      })
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
}
