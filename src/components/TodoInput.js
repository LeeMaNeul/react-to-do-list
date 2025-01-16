import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Search from '../search.png'

const TodoInput = ({ 
  search, 
  handleSearchChange, 
  handleFilterChange, 
  handleInputChange, 
  addTodo, 
  value, 
  handleKeyPress
}) => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input 
          placeholder='할 일을 입력하세요.'
          onChange={handleInputChange}
          value={value}
          onKeyUp={handleKeyPress}
        />
        <Button onClick={addTodo} message={"등록"}></Button>
      </InputWrapper>
      
      <div style={{ display: 'flex' }}>
        <SearchWrapper>
          <Img 
            src={Search}
            alt='search'
          />
          <SearchInput 
            type="text"
            placeholder='검색'
            onChange={e => handleSearchChange(e)}
            value={search}
          />
        </SearchWrapper>

        <Filter defaultValue="1" onChange={handleFilterChange}>
          <option value="1">생성일 오름</option>
          <option value="2">생성일 내림</option>
          <option value="3">완료</option>
          <option value="4">미완료</option>
        </Filter>
      </div>
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
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const InputWrapper = styled.div `
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-grow: 1;
  }

  @media (max-width: 1280px) {
    flex-grow: 1;
  }
`

const Input = styled.input `
  width: 31rem;
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
  
  @media (max-width: 1280px) {
    width: 100%;
  }
`

const SearchWrapper = styled.div `
  display: flex; 
  position: relative; 
  margin-top: 30px; 
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-grow: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 20px;
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

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`

const Img = styled.img `
  width: 15px;
  height: 16px;
  position: absolute;
  top: 12px; 
  left: 10px;
  opacity: 0.5;

  @media (max-width: 768px) {
    left: 10px;
  }
`