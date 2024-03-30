import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const BoardContainer = styled.ul`
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  background-color: #ededed;
  height: 80vh;
  border: 1px solid lightgray;
  border-radius: 20px;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 0px 20px;
  }

  &::-webkit-scrollbar {
    height: 20px;
    background-color: #f5f5f5;
    margin: 0px 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    margin: 0px 20px;
  }
`
