let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="removeTask(${index})">X</button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Enter a task!");
    return;
  }

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  render();
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

render();