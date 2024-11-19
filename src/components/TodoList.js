import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const TodoList = ({ todos, delTodo }) => {
    return (
        <ul style={{ marginLeft: -30}}>
            {todos.map((todo, index) => {
                return (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 20}}>
                        <CheckBox type='checkbox'/>
                        <List >{todo}</List>
                        <Button onClick={() => delTodo(index)} message="삭제"></Button>
                    </li>
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
`

const CheckBox = styled.input `
    margin-top: 2rem;
    margin-right: -10px;
    width: 1rem; height: 1rem;
`;