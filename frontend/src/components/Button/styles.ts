import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: dashed 2px black;
  border-radius: 10px;
  background-color: #4086d6;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`
