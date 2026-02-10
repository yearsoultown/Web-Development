const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const createTaskItem = (text) => {
  const li = document.createElement('li');
  li.classList.add('task');

  const left = document.createElement('div');
  left.classList.add('task__left');

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('task__check');

  const label = document.createElement('span');
  label.classList.add('task__text');
  label.textContent = text;

  check.addEventListener('change', () => {
    label.classList.toggle('task__text--done');
  });

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.classList.add('task__remove');
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    li.remove(); // alternative to removeChild, still DOM removal
  });

  left.appendChild(check);
  left.appendChild(label);

  li.appendChild(left);
  li.appendChild(removeBtn);

  return li;
};

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = taskInput.value.trim();
  if (!value) return;

  const item = createTaskItem(value);
  taskList.appendChild(item);

  taskInput.value = '';
  taskInput.focus();
});
