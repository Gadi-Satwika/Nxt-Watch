import styled from 'styled-components'

export const HomePageHalfPart = styled.div`
  display: flex;
  flex-direction: column;
`
export const PageContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#000000'};
`
