import styled from 'styled-components'

export const HomePageHalfPart = styled.div`
  display: flex;
  flex-direction: column;
`
export const PageContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const LoaderContainer = styled.div`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  width: 75vw;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 25vw;
  height: 38vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
`

export const RetryButton = styled.button`
  width: 9vw;
  height: 5vh;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  margin-bottom: 5vh;
  cursor: pointer;
`

export const HomePageHalf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 100vh;
  padding: 10px;

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
  }
`
