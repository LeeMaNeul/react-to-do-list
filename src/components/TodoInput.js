import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Search from '../search.png'

const TodoInput = ({ handleFilterChange, handleInputChange, addTodo, value, handleKeyPress }) => {
  return (
    <Wrapper>
      <Input 
          placeholder='할 일을 입력하세요.'
          onChange={handleInputChange}
          value={value}
          onKeyUp={handleKeyPress}
      />
      <Button onClick={addTodo} message={"등록"}></Button>
      <div style={{ display: 'flex', position: 'relative', marginTop: 30, marginLeft: 70 }}>
        <img 
          src={Search}
          style={{
            width: 15, height: 16,
            position: 'absolute',
            left: 10, top: 12,
            opacity: 0.5
          }}
        />
        <SearchInput />
      </div>
      <Filter defaultValue="1" onChange={handleFilterChange}>
        <option value="1">생성일 오름</option>
        <option value="2">생성일 내림</option>
        <option value="3">완료</option>
        <option value="4">미완료</option>
      </Filter>
    </Wrapper>
  )
}

export default TodoInput

const Filter = styled.select `
  width: 130px; height: 40px;
  padding: 0 10px 0 4px;
  margin-top: 30px;
  margin-left: 1rem;
  border: 1px solid #999;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  background-color: #F0F8FF;
  &:focus {
    border: 2px solid #A7D8FF;
  }
`

const Wrapper = styled.div `
  display: flex;
  gap: 20px;
`

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

const SearchInput = styled.input `
    width: 200px;
    height: 40px;
    border: 1px solid #999;
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;
    padding: 10px 20px 10px 34px;
    font-size: 16px;
    background-color: #F0F8FF;
    
    &:focus {
        border: 2px solid #A7D8FF;
    }
`