import React from 'react'
import styled from 'styled-components'

const TodoModal = ({ setModal }) => {
  const handleKeyDown = e => {
    if (e.key === 'Enter') setModal(false);
  }

  return (
    <Modal tabIndex={0} onKeyDown={handleKeyDown}>
        <Message>할 일을 입력해 주세요.</Message>
        <Button onClick={() => setModal(false)}>닫기</Button>
    </Modal>
  )
}

export default TodoModal

const Modal = styled.div `
    width: 450px; height: 300px;
    border-radius: 10px;
    background-color: #FAF9F6   ;
    position: absolute;
    top: 130px;
    left: 0; right: 0;
    margin: auto;
    z-index: 3;
`

const Message = styled.p `
    text-align: center;
    font-size: 25px;
    position: absolute;
    top: 40%; left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    color: #444;
`

const Button = styled.button `
    width: 60px;
    height: 40px;
    border: 1px solid #dadada;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 16px;
    background-color: #E9F7EF;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;

    &:hover {
        background-color: #CDEDE1;
        border: 2px solid #A7D8FF;
    }
`