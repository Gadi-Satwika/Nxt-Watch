import {Component} from 'react'

import {FaFire} from 'react-icons/fa'

import ThemeContext from '../../ThemeContext'
import {MainContainer, Heading, FireIcon} from './StyledComponents'

class RouteHeader extends Component {
  render() {
    const {heading} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <MainContainer theme={theme}>
              <FireIcon theme={theme}>
                <FaFire size={30} color="#ff0000" />
              </FireIcon>
              <Heading theme={theme}>{heading}</Heading>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default RouteHeader
