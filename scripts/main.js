function updateCounters() {
    const totalCount = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;

    const completedCount = document.getElementById("completed-count");
    const completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;

    const todoCount = document.getElementById("todo-count");
    const uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }
  
  updateCounters();

  function toggleDone(event) {
    const checkbox = event.currentTarget;
    
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.className = "todo completed";
    } else {
      checkbox.parentElement.parentElement.className = "todo";
    }
    updateCounters();
  }
  
  const checkboxes = document.querySelectorAll(".todo input");
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
  }

  function createTodo(title) {
   const label = document.createElement("label");
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.checked = false;

   checkbox.addEventListener("change", toggleDone);
   label.appendChild(checkbox);
  
   const labelText = document.createTextNode(" " + title);
   label.appendChild(labelText);
 
   const listItem = document.createElement("li");
   listItem.className = "todo";
   listItem.appendChild(label);
  
   const list = document.getElementById("todolist");
   list.appendChild(listItem);
  }
  
  document
  .querySelector("form")
  .addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();

    const inputField = document.querySelector("#new-todo");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle);

    inputField.value = null;

    updateCounters();
  });

  function cleanUpDoneTodos() {
    const doneItems = document.querySelectorAll(".completed");
  
    for (let i = 0; i < doneItems.length; i++) {
        doneItems[i].remove();
    }
   
    updateCounters();
  }
  document.getElementById("clean-up").addEventListener("click", cleanUpDoneTodos);