import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 0 5%;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9 ' : '#181818'};

  @media screen and (min-width: 768px) {
    height: 15vh;
  }
`

export const HomeLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AppLogo = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 12vw;
  }
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #475569;

  /* Mobile: Space out items slightly more */
  width: 150px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 30vw;
  }

  @media screen and (min-width: 1024px) {
    width: 18vw;
  }
`

export const ProfileImage = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 5vw;
    height: 7vh;
  }

  @media screen and (min-width: 1001px) {
    width: 3vw;
    height: 6vh;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HamburgerMenu = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButtonLarge = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  color: ${props => (props.theme === 'light' ? ' #3b82f6' : '#ffffff')};
  cursor: pointer;
  font-weight: 600;
  border-radius: 2px;
  padding: 5px 10px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButtonSmall = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.theme === 'light' ? ' ' : '#ffffff')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Togglebutton = styled.button`
  background-color: transparent;
  border: none;
`

export const ReactPopup = styled.div`
  box-shadow: 0px 0px 2px 0px #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  margin: 15px;
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`
export const ButtonsPopup = styled.div`
  display: flex;
  align-items: center;
`

export const CancelButton = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-size: 16px;
  margin: 5px;
  width: 7vw;
  height: 4vh;
  background-color: transparent;
  border-radius: 2px;

  @media screen and (max-width: 767px) {
    width: 25vw;
    height: 6vh;
  }
`
export const ConfirmButton = styled.button`
  border: none;
  color: #ffffff;
  font-size: 16px;
  background-color: blue;
  width: 7vw;
  height: 4vh;
  border-radius: 2px;

  @media screen and (max-width: 767px) {
    width: 25vw;
    height: 6vh;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
`
