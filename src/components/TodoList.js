import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const TodoList = ({ 
  handleChange, 
  todos, 
  delTodo, 
  handleClick, 
  handleRevise
}) => {
  return (
    <ul style={{ marginLeft: -30}}>
      {todos.map((todo, index) => {
        return (
          todo && (
            <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 20}}>
              <CheckBox 
                type='checkbox' 
                checked={todo.completed} 
                onChange={() => handleClick(todo.id)}
              />
              {todo.revise ? (
                <ListInput 
                  value={todo.text} 
                  onChange={e => handleChange(e, todo.id)}
                  placeholder='할 일을 입력하세요.'
                />
              ) : (
                <List 
                  onClick={() => handleRevise(todo.id)}
                  $completed={todo.completed}
                >
                 {todo.text}
                </List>
              )}
              {todo.revise && <Button message="수정" onClick={() => handleRevise(todo.id)}></Button>}
              <Button onClick={() => delTodo(todo.id)} message="삭제"></Button>
            </li> 
          )
        )
      })}
    </ul>
  )
}

export default TodoList

const List = styled.div `
  list-style: none;
  font-size: 20px;
  margin-top: 22px;
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`

const ListInput = styled.input `
  width: 300px;
  height: 40px;
  border: 1px solid #999;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 30px;
  background-color: #F0F8FF;
  
  &:focus {
    border: 2px solid #A7D8FF;
  }

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`

const CheckBox = styled.input `
  margin-top: 2rem;
  margin-right: -10px;
  width: 1rem; height: 1rem;
`;