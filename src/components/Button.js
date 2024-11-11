import React from 'react'
import styled from 'styled-components'

const ButtonComponent = ({ message, onClick }) => {
  return (
    <Button onClick={onClick}>{message}</Button>
  )
}

export default ButtonComponent

const Button = styled.button `
    width: 60px;
    height: 40px;
    border: 1px solid #dadada;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 16px;
    background-color: #E9F7EF;
    cursor: pointer;

    &:hover {
        background-color: #CDEDE1;
        border: 2px solid #A7D8FF;
    }
`