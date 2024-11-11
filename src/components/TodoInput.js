import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const TodoInput = ({ handleChange, addTodo, value, handleKeyPress }) => {
  return (
    <div style={{ display: 'flex', gap: 20}}>
        <Input 
            placeholder='할 일을 입력하세요.'
            onChange={handleChange}
            value={value}
            onKeyUp={handleKeyPress}
        />
        <Button onClick={addTodo} message={"등록"}></Button>
    </div>
  )
}

export default TodoInput

const Input = styled.input `
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
`