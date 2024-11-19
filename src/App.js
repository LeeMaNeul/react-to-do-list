import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoModal from './components/Modal';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  }

  const addTodo = () => {
    if (value.trim()) {
      setTodos([...todos, value]);
      setValue('');
    } else {
      setModal(true);
    }
  }

  const delTodo = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  }

  return (
    <div className="App">
      {modal && <div className='shadow'></div>}
      <div className='inner'>
        {modal && <TodoModal setModal={setModal}/>}
        <div className='wrapper'>
          <TodoInput handleKeyPress={handleKeyPress} handleChange={handleChange} addTodo={addTodo} value={value}/>
          <TodoList todos={todos} delTodo={delTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
