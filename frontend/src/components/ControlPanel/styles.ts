import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: white;

    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 576px) {
    gap: 10px;

    & > button {
      padding: 0px 5px;
      font-size: 15px;
    }
  }
`
