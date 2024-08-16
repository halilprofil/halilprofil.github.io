import { useState } from 'react';
import './App.css';

let id = 0;

const generateId = () => ++id;

export default function App() {
  const [todos, setTodos] = useState([]);

  function appendTodo(task) {
    const todoObj = {
      id: generateId(),
      task,
      completed: false,
    };
    setTodos([...todos, todoObj]);
  }

  function renderActive() {
    setTodos(todos.filter((x) => !x.completed)); 
  }

  function renderCompleted(){
    setTodos(todos.filter((x)=> x.completed));
  }

  function renderAll(){
    setTodos(todos.map((x)=>x));
  }

  function clearBtn(){
    setTodos([]);
  }

  return (
    <>
      <div className="header">
        <img src="../src/assets/Bitmap (2).jpg" alt="Header"/>
      </div>
      <div className="content">
        <TodoForm appendTodo={appendTodo} />
        <TodoList todos={todos} setTodos={setTodos} renderActive={renderActive} renderCompleted={renderCompleted} renderAll={renderAll} clearBtn={clearBtn} />
      </div>
    </>
  );
}

function TodoList({ todos, setTodos, renderActive ,renderCompleted,renderAll ,clearBtn }) {
  return (
    <div className='todo-list'>
      {todos.map((x) => (
        <TodoItem
          key={x.id} 
          id={x.id}
          task={x.task}
          completed={x.completed}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      
      <div className="content-footer">
        <p>{todos.length} items left</p>
        <div className="button-list">
          <button onClick={renderAll}>All</button>
          <button onClick={renderActive}>Active</button>
          <button onClick={renderCompleted}>Completed</button>
        </div>
        <div className="clear-all">
          <button onClick={clearBtn}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

function TodoItem({ task, id, completed, todos, setTodos }) {
  const [lineChecked, setChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setChecked(!lineChecked);

    const updatedTodos = todos.map((x) => {
      if (x.id === id) {
        return { ...x, completed: !lineChecked };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = () => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  return (
    <>
      <p className='todo-item'>
        <input
          name='todo'
          id={`todo-${id}`}
          type="checkbox"
          checked={lineChecked}
          onChange={handleCheckboxChange}
        />
        <label className={lineChecked ? 'line checkmark' : 'checkmark'} htmlFor={`todo-${id}`}>
          {task}
        </label>
        <button onClick={handleDelete} className='delete-btn'>x</button>
      </p>
    </>
  );
}

function TodoForm({ appendTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    appendTodo(e.target['task'].value);
    e.target.reset();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} autoComplete='off'>
        <h1>TODO</h1>
        <input name='task' required type="text" placeholder='Create a new todo…' />
      </form>
    </div>
  );
}


