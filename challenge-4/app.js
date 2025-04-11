/**
 * Write your challenge solution here
 */

const addbtn = document.getElementById('addButton')
const tasklist = document.getElementById('taskList')
const taskinput = document.getElementById('taskInput')
const Notask = document.getElementById('Notask')

let totaltasks = document.getElementById('totalTasks')
let completetasks = document.getElementById('completedTasks')

let total = 0
let complete = 0

addbtn.addEventListener('click', () => {

   // Check if the value is not empty
   if (taskinput.value !== '') {

      Notask.style.display = 'none'  // Hide the "No tasks yet" message if a task is added

      // const value = taskinput.value

      const li = document.createElement('li')
      // li.innerHTML = value
      li.classList.add("task-item")


      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.classList.add('complete-checkbox')
      li.appendChild(checkbox)



      const p = document.createElement('p')
      p.innerHTML = taskinput.value
      p.classList.add('task-text')
      li.appendChild(p)



      const btn = document.createElement('button')
      btn.innerText = "Delete"
      btn.classList.add('delete-button')
      li.appendChild(btn)


      tasklist.appendChild(li)
      taskinput.value = ''
      total = total + 1
      totaltasks.innerText = `Total tasks: ${total}`

      btn.addEventListener('click', () => {
         li.remove()
         total = total - 1
         totaltasks.innerHTML = `Total tasks:  ${total}`

         if (total === 0) {
            Notask.style.display = ''
         }

         if (checkbox.checked) {
            li.classList.remove('completed');
            complete = complete - 1
            completetasks.innerHTML = `Completed: ${complete}`
         }

      })

      checkbox.addEventListener('click', () => {
         if (checkbox.checked) {

            li.classList.add('completed')
            complete = complete + 1
            completetasks.innerText = `Completed: ${complete}`


         } else {

            li.classList.remove('completed');
            complete = complete - 1
            completetasks.innerHTML = `Completed: ${complete}`
         }
      })
   }
}) 