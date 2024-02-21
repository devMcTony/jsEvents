const tasksDisplayList = document.getElementById('tasks')
const taskInput = document.getElementById('task')
const submitBtn = document.getElementById('submitBtn')

taskInput.addEventListener('input', () => {
  submitBtn.disabled = !taskInput.value.trim()
})

document.querySelector('form').addEventListener('submit', addTask)

function addTask(e) {
  e.preventDefault()
  const task = taskInput.value.trim()

  if (task) {
    const listItem = document.createElement('li')
    listItem.textContent = task

    tasksDisplayList.appendChild(listItem)

    taskInput.value = ''

    submitBtn.disabled = true
  }
}
