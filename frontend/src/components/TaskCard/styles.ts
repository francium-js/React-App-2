import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 15px 10px;
  margin: 5px 5px;
  gap: 10px;
  border: solid 2px gray;
  border-radius: 5px;
  background-color: #e8e6e6;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #cdcdcd;
  }

  & > p {
    color: gray;
    word-wrap: break-word;
  }
`

export const DateWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const PriorityWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 5px 10px;
  width: max-content;
  align-items: center;
  background-color: #a8a8a8;
  border-radius: 10px;
`

export const SettingCardWrapper = styled.div`
  position: absolute;
  right: 10px;
`
