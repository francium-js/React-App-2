import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  animation: rotateAnimation 2s linear infinite;
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
