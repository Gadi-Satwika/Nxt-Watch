import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#231f20'};
  padding: 20px;
`

export const LoginForm = styled.form`
  box-shadow: 0px 0px 2px 0px #bfbfbf;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#0f0f0f'};
  border: none;
  color: ${props => (props.theme === 'light' ? '#64748b' : '#ffffff')};

  @media screen and (min-width: 767px) {
    width: 40vw;
  }

  @media screen and (min-width: 1024px) {
    width: 33vw;
  }
`

export const AppLogoContainer = styled.div`
  align-self: center;
`

export const AppLogo = styled.img`
  width: 40vw;
  height: auto;
  margin-bottom: 5vh;

  @media screen and (min-width: 768px) {
    width: 20vw;
  }

  @media screen and (min-width: 1024px) {
    width: 12vw;
  }
`

export const LabelName = styled.label`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#ffffff')};
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 1vh;
  margin-top: 3vh;
`

export const InputField = styled.input`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
  height: 5vh;
  border: 1px solid #94a3b8;
  padding-left: 1vw;
  outline: none;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : 'transparent'};
  width: 100%;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  height: 5vh;
  margin-top: 2vh;
  color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;
`
