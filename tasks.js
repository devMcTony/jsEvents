const submit = document.getElementById("submit");
const newTask = document.getElementById("task");
const tasksList = document.getElementById("tasks");


newTask.addEventListener("input", () => {
  submit.disabled = !newTask.value.trim();
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const task = newTask.value.trim();

  if (task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    tasksList.appendChild(listItem);

    newTask.value = "";

    submit.disabled = true;
  }
});

function removeTask(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}
