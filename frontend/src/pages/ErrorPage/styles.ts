import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > h1 {
    font-size: 50px;
    color: white;
  }
`
