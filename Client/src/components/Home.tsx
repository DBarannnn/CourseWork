import { useLoaderData } from 'react-router-dom';
import './Home.css'; 



export const loader = async ({ request }: { request: Request }) => {
   
};



const TodoList = () => {
    const todos = useLoaderData() as todos

  return (
    <div className="todo-list">
      <h2>Your Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
