import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMoon, IoLogOutOutline} from 'react-icons/io5'
import {IoIosSunny, IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow, GiHamburgerMenu} from 'react-icons/gi'

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {
  NavBarContainer,
  HomeLogoContainer,
  AppLogo,
  NavItems,
  ProfileImage,
  LogoutButtonLarge,
  LogoutButtonSmall,
  Togglebutton,
  CancelButton,
  ReactPopup,
  ConfirmButton,
  ButtonsPopup,
  HamburgerMenu,
  CloseButton,
} from './StyledComponents'

import {
  ListContainer,
  StyledNavLink,
  ListItemName,
  EachListContainer,
} from '../Sidebar/StyledComponents'

import ThemeContext from '../../ThemeContext'

class Navbar extends Component {
  logoutButton = () => {
    const propsData = this.props
    const {history} = propsData
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, toggleTheme} = value
          console.log(theme)
          const logorul =
            theme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const icon =
            theme === 'light' ? (
              <IoMoon size={35} />
            ) : (
              <IoIosSunny size={40} color="#ffffff" />
            )
          return (
            <NavBarContainer theme={theme}>
              <HomeLogoContainer>
                <Link to="/">
                  <AppLogo src={logorul} alt="website logo" />
                </Link>
              </HomeLogoContainer>
              <NavItems>
                <Togglebutton
                  type="button"
                  data-testid="theme"
                  onClick={() => {
                    toggleTheme()
                  }}
                >
                  {icon}
                </Togglebutton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HamburgerMenu>
                  <Popup
                    modal
                    trigger={<GiHamburgerMenu size={35} />}
                    className="popup-content"
                  >
                    {close => (
                      <ReactPopup theme={theme}>
                        <CloseButton theme={theme} onClick={() => close()}>
                          <IoMdClose size={20} />
                        </CloseButton>
                        <ListContainer>
                          <StyledNavLink exact to="/" theme={theme}>
                            <EachListContainer theme={theme}>
                              <AiFillHome size={20} />
                              <ListItemName theme={theme}>Home</ListItemName>
                            </EachListContainer>
                          </StyledNavLink>

                          <StyledNavLink to="/trending" theme={theme}>
                            <EachListContainer theme={theme}>
                              <FaFire size={20} />
                              <ListItemName theme={theme}>
                                Trending
                              </ListItemName>
                            </EachListContainer>
                          </StyledNavLink>

                          <StyledNavLink to="/gaming" theme={theme}>
                            <EachListContainer theme={theme}>
                              <SiYoutubegaming size={20} />
                              <ListItemName theme={theme}>Gaming</ListItemName>
                            </EachListContainer>
                          </StyledNavLink>

                          <StyledNavLink to="/saved-videos" theme={theme}>
                            <EachListContainer theme={theme}>
                              <GiSaveArrow size={20} />
                              <ListItemName theme={theme}>
                                Saved videos
                              </ListItemName>
                            </EachListContainer>
                          </StyledNavLink>
                        </ListContainer>
                      </ReactPopup>
                    )}
                  </Popup>
                </HamburgerMenu>
                <Popup
                  modal
                  trigger={
                    <LogoutButtonLarge type="button" theme={theme}>
                      Logout
                    </LogoutButtonLarge>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ReactPopup theme={theme}>
                      <p>Are you sure you want to logout? </p>
                      <ButtonsPopup>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton onClick={this.logoutButton}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsPopup>
                    </ReactPopup>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutButtonSmall type="button" theme={theme}>
                      <IoLogOutOutline size={35} />
                    </LogoutButtonSmall>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ReactPopup theme={theme}>
                      <p>Are you sure you want to logout? </p>
                      <ButtonsPopup>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton onClick={this.logoutButton}>
                          Confirm
                        </ConfirmButton>
                      </ButtonsPopup>
                    </ReactPopup>
                  )}
                </Popup>
              </NavItems>
            </NavBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
