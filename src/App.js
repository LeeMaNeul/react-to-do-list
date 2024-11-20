import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoModal from './components/Modal';

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]); // 수정 기능 및 완료 기능 추가를 위해 기존 단순 배열에서 배열 내 요소를 객체 데이터로 구성
  const [modal, setModal] = useState(false);

  const handleClick = (index) => {
    setTodos(prev => prev.map((todo, i) => (
      i === index ? {...todo, completed: !todo.completed } : todo
    )));
  }

  const handleChange = (e, index) => {
    const updatedValue = e.target.value;
    setTodos(prev => prev.map((todo, i) => (
      i === index ? { ...todo, text: updatedValue } : todo
    )))
  }

  const handleInputChange = e => {
    setValue(e.target.value);
  }

  const handleRevise = (index) => {
    setTodos(prev => prev.map((todo, i) => {
      if (todo.text) {
        return i === index ? { ...todo, revise: !todo.revise } : todo;
      } else {
        setModal(true);
        return;
      }
    }))
  }

  const addTodo = () => {
    if (value.trim()) {
      setTodos([
        ...todos,
        { text: value, completed: false, revise: false }
      ]);
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
          <TodoInput handleKeyPress={handleKeyPress} handleInputChange={handleInputChange} addTodo={addTodo} value={value}/>
          <TodoList handleClick={handleClick} handleChange={handleChange} todos={todos} delTodo={delTodo} handleRevise={handleRevise} />
        </div>
      </div>
    </div>
  );
}

export default App;
