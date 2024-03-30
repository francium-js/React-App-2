import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;
  height: 390px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  & > h3 {
    padding: 5px;
    word-wrap: break-word;
    font-size: 25px;

    width: 80%;

    @media screen and (max-width: 576px) {
      width: 80%;
    }
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

  & > p {
    padding: 7px;
    height: 150px;
    word-wrap: break-word;
    overflow-y: auto;
    font-size: 20px;

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
