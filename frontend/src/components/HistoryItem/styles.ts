import styled from 'styled-components'

export const Container = styled.li`
  & > p {
    word-wrap: break-word;
    font-size: 12px;
  }

  & > p:first-child {
    font-size: 15px;
    font-weight: 500;
  }

  & > p:last-child {
    font-size: 15px;
    color: gray;
  }
`
