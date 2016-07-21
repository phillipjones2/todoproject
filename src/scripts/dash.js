console.clear();
const todoContainer = document.getElementById('todo-container'),
      newTodoContainer = document.getElementById('new-todo-container'),
      todos = document.getElementById('todos');

// Mock JSON data to receive from server.
const serverResponse = {
  user: {
    name: 'Colton'
  },

  data: [
    {
      title: 'title one',
      content: 'content one',
      date: '12/12/2012'
    },
    {
      title: 'title two',
      content: 'content two',
      date: '12/12/2020'
    }
  ]
}

// Insert the user's name into the #user-name span.
document.getElementById('user-name').innerText = serverResponse.user.name;

// For each todo objct returned from the server...
serverResponse.data.forEach((todo, i) => {
  // Create a DOM element.
  const todoElement = document.createElement('div');
  // Give it an ID and classes.
  todoElement.setAttribute('id', `todo-${i}`);
  todoElement.setAttribute('class', 'todo');

  // Create elements that will make up the todo in the document.
  const titleElement = document.createElement('h3'),
        contentElement = document.createElement('p'),
        dateElement = document.createElement('p');

  // Create text nodes to be inserted into respective elements.
  const todoTitle = document.createTextNode(todo.title),
        todoContent = document.createTextNode(todo.content),
        todoDate = document.createTextNode(todo.date);

  // Push text nodes into respective elements.
  titleElement.appendChild(todoTitle);
  contentElement.appendChild(todoContent);
  dateElement.appendChild(todoDate);

  // Place those elements inside of the todoElement.
  todoElement.appendChild(titleElement);
  todoElement.appendChild(contentElement);
  todoElement.appendChild(dateElement);

  // Add the todoElement into #todo-container.
  todoContainer.appendChild(todoElement);
});
