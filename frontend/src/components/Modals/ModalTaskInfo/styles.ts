import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    max-height: 70vh;
    overflow-y: auto;
    width: 100%;
  }
`

export const EditButtonWrapper = styled.div`
  top: 0px;
  right: 0px;
  position: absolute;

  & > button {
    border-radius: 3px;
    border: solid 2px black;
    display: flex;
    padding: 4px;
    align-items: center;
    cursor: pointer;
  }
`

export const CardFormWrapper = styled.div`
  position: relative;
`

export const TaskHistory = styled.div`
  border-left: solid 1px black;
  padding-left: 20px;

  @media screen and (max-width: 576px) {
    border: none;
    padding-top: 20px;
    border-top: solid 1px black;
  }

  & > ul {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    max-height: 40vh;
    overflow-y: auto;
    list-style: none;
    width: 250px;

    @media screen and (max-width: 576px) {
      width: 100%;
      padding-top: 20px;
      border-top: solid 1px black;
      border: none;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #555;
    }
  }
`
