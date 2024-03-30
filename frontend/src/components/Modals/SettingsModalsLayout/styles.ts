import styled from 'styled-components'

import { IoMdClose } from 'react-icons/io'

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;
  margin: 0px 20px;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: inset 0px 0px 0px 4px #30406e;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  font-size: 20px;
  height: 40px;
  align-items: center;
  background-color: #30406e;

  & > h3 {
    color: white;
    font-weight: 300;
    margin-left: 20px;
  }
`

export const ButtonConfirmWrapper = styled.div`
  margin: 0px auto;

  & > button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 20px;
    font-size: 20px;
    border-radius: 10px;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const ChildrenContainer = styled.div`
  padding: 0px 20px;
`

export const ButtonClose = styled(IoMdClose)`
  position: absolute;
  right: 10px;
  top: 6px;
  fill: white;
  border: none;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`
