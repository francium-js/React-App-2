import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  gap: 10px;
  height: max-content;
  max-height: 95%;
  padding: 5px;
  flex-direction: column;
  border: solid 4px #a3a3a3;
  border-radius: 10px;
  background-color: white;
`

export const Header = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid gray;
`

export const HeaderSetting = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > p {
    font-size: 20px;
    font-weight: 700;
  }
`

export const NoDataInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`

export const TaskWrapper = styled.ul`
  display: flex;
  gap: 10px;
  width: 262px;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`
