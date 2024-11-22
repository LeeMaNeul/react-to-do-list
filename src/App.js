import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoModal from './components/Modal';

function App() {
  const [value, setValue] = useState(""); // 할 일 등록 input 값
  const [search, setSearch] = useState(""); // 검색 input 값
  const [todos, setTodos] = useState([]); // 전체 할 일 데이터
  const [displayedTodos, setDisplayedTodos] = useState([]); // 최종 렌더링할 데이터
  // 필터링 + 검색 기능
  const [filterOption, setfilterOption] = useState("1"); // 필터 옵션

  const [modal, setModal] = useState(false); // 모달 상태

  const filterAndSearch = () => { // 필터 옵션에 따라 실행되는 각 필터링 함수 + 검색 기능
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
  
    if (search.trim()) {
      updatedTodos = updatedTodos.filter(todo => 
        todo.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    setDisplayedTodos(updatedTodos);
  }

  useEffect(() => {
    filterAndSearch();
  }, [todos, filterOption, search]); 
  // todos 추가될 때 filter 함수를 실행 => 필터 적용 시 추가된 todos가 보여야 돼서

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  

  const handleSearchChange = e => {
    setSearch(e.target.value);
  }

  const handleFilterChange = e => { // 필터 옵션 선택 모니터링
    setfilterOption(e.target.value);
  }

  const handleClick = (id) => { // 등록 버튼 클릭
    setTodos(prev => prev.map((todo, i) => (
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    )));
  }

  const handleChange = (e, id) => { // 할 일 수정 input 값 모니터링
    const updatedValue = e.target.value;
    setTodos(prev => prev.map((todo) => (
      todo.id === id ? { ...todo, text: updatedValue } : todo
    )))
  }

  const handleInputChange = e => { // 할 일 등록 input 값 모니터링
    setValue(e.target.value);
  }

  const handleRevise = (id) => { // 할 일 수정 버튼 클릭 시 이벤트 발생
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

  const addTodo = () => { // 할 일 등록 버튼 클릭 시 이벤트 발생
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

  const delTodo = id => { // 할 일 삭제 버튼 클릭 시 이벤트 발생
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleKeyPress = e => { // 엔터 키 누르면 등록 함수 실행
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
          <TodoInput 
            handleKeyPress={handleKeyPress} 
            handleInputChange={handleInputChange} 
            addTodo={addTodo} 
            value={value} 
            search={search}
            handleFilterChange={handleFilterChange} 
            handleSearchChange={handleSearchChange}
          />
          <TodoList 
            handleClick={handleClick} 
            handleChange={handleChange} 
            todos={displayedTodos} 
            delTodo={delTodo} 
            handleRevise={handleRevise} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
