import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ButtonContainer = styled.div`
  position: absolute;
  translate: -100% -20%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 5px;
  gap: 10px;
  border: solid 1px #282828;
  background-color: #efefef;
  border-radius: 8px;

  & > button {
    display: flex;
    gap: 10px;
    justify-content: start;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    background-color: #efefef;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &#deleteButton {
      color: red;
    }

    &:hover {
      background-color: #c9c9c9;
    }
  }
`

export const IconWrapper = styled.div`
  display: flex;
  max-width: max-content;
  max-height: max-content;
  cursor: pointer;

  &:hover {
    animation: rotateAnimation 2s linear infinite;
    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
