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