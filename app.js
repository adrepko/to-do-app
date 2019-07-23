function onReady() {
  let storedArr = localStorage.getItem("arr");
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm')
  let id = 0;
  if (storedArr != null) {
    toDos = JSON.parse(storedArr);
    console.log(toDos);
  }

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';
    id++;
    renderTheUI();
    console.log(toDos);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      const remove = document.createElement('input');
      remove.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised');
      remove.style.color = "white";
      remove.type = "button";
      remove.value = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild (remove);

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          toDo.complete = true;
        } else {
          toDo.complete = false;
        }
        localStorage.setItem("arr", JSON.stringify(toDos));
      })

      remove.addEventListener('click', () => {
        event.preventDefault();
        const result = toDos.filter(item => toDo.id != item.id);
        toDos.length = 0;
        [].push.apply(toDos, result);
        localStorage.setItem("arr", JSON.stringify(toDos));
        renderTheUI();
      })
      localStorage.setItem("arr",JSON.stringify(toDos));
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
