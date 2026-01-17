import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'

import {
  SidebarContainer,
  ListContainer,
  StyledNavLink,
  EachListContainer,
  ListItemName,
} from './StyledComponents'

import ThemeContext from '../../ThemeContext'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <SidebarContainer theme={theme}>
              <ListContainer>
                <StyledNavLink exact to="/" theme={theme}>
                  <EachListContainer>
                    <AiFillHome size={30} />
                    <ListItemName theme={theme}>Home</ListItemName>
                  </EachListContainer>
                </StyledNavLink>

                <StyledNavLink to="/trending" theme={theme}>
                  <EachListContainer>
                    <FaFire size={30} />
                    <ListItemName theme={theme}>Trending</ListItemName>
                  </EachListContainer>
                </StyledNavLink>

                <StyledNavLink to="/gaming" theme={theme}>
                  <EachListContainer>
                    <SiYoutubegaming size={30} />
                    <ListItemName theme={theme}>Gaming</ListItemName>
                  </EachListContainer>
                </StyledNavLink>

                <StyledNavLink to="/saved-videos" theme={theme}>
                  <EachListContainer>
                    <GiSaveArrow size={30} />
                    <ListItemName theme={theme}>Saved videos</ListItemName>
                  </EachListContainer>
                </StyledNavLink>
              </ListContainer>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
