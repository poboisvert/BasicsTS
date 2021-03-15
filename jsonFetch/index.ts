import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// TS Confg Interface

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  //
  const todo = res.data as Todo; // Use the interface

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // Injection
  LogTodo(id, title, completed);
});

const LogTodo = (id: number, title: string, completed: boolean) => {
  console.log(`CALLBACK: This is ${id} with ${title} and ${completed}`);
};
