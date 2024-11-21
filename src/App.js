import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoModal from './components/Modal';

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]); // 수정 기능 및 완료 기능 추가를 위해 기존 단순 배열에서 배열 내 요소를 객체 데이터로 구성
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterOption, setfilterOption] = useState("1");
  const [modal, setModal] = useState(false);

  const filter = () => {
    let updatedTodos = [...todos];
    switch (filterOption) {
      case "1":
        updatedTodos.sort((a, b) => a.id - b.id);
        break;
      case "2": 
        updatedTodos.sort((a, b) => b.id - a.id);
        break;
      case "3":
        updatedTodos = updatedTodos.filter(prev => prev.completed);
        break;
      case "4":
        updatedTodos = updatedTodos.filter(prev => !prev.completed);
        break;    
      default:
        break;
    }
    setFilteredTodos(updatedTodos);
  }

  useEffect(() => {
    filter();
  }, [todos, filterOption]); 
  // todos 추가될 때 filter 함수를 실행 => 필터 적용 시 추가된 todos가 보여야 돼서


  

  const handleFilterChange = e => {
    setfilterOption(e.target.value);
  }

  const handleClick = (id) => {
    setTodos(prev => prev.map((todo, i) => (
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    )));
  }

  const handleChange = (e, id) => {
    const updatedValue = e.target.value;
    setTodos(prev => prev.map((todo) => (
      todo.id === id ? { ...todo, text: updatedValue } : todo
    )))
  }

  const handleInputChange = e => {
    setValue(e.target.value);
  }

  const handleRevise = (id) => {
    setTodos(prev => prev.map((todo) => {
      if (todo.id === id) {
        if (todo.text.trim()) {
          return { ...todo, revise: !todo.revise };
        } else {
          setModal(true);
          return todo;
        }
      }
      return todo;
    }));
  }

  const addTodo = () => {
    if (value.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: value, completed: false, revise: false }
      ]);
      setValue('');
    } else {
      setModal(true);
    }
  }

  const delTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
          <TodoInput handleKeyPress={handleKeyPress} handleInputChange={handleInputChange} addTodo={addTodo} value={value} handleFilterChange={handleFilterChange}/>
          <TodoList handleClick={handleClick} handleChange={handleChange} todos={filteredTodos} delTodo={delTodo} handleRevise={handleRevise} />
        </div>
      </div>
    </div>
  );
}

export default App;
