import styled from 'styled-components'

export const HostiryContainer = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  min-width: 250px;
  max-height: 60vh;
  overflow-y: auto;
  font-size: 30px;

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
`
