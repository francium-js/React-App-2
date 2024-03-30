import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 30px;
  height: 390px;
  width: 400px;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ItemFormWrapper = styled.div``

export const Select = styled.select`
  font-size: 30px;

  border: solid 2px black;
  border-radius: 5px;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  padding: 5px;
  height: 150px;
  width: 100%;
  overflow-y: auto;
  font-size: 20px;
  border: solid 2px black;
  border-radius: 5px;
  resize: none;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`

export const ParamsContainer = styled.div`
  display: flex;
  gap: 40px;
  list-style-type: none;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;

    & > li {
      gap: 10px;
      height: 25px;
      display: flex;
      font-size: 20px;
      align-items: center;

      & > p {
        color: gray;
      }
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h3 {
  }

  & input {
  }
`
