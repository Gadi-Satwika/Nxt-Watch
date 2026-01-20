import {Component} from 'react'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

import {HomePageHalfPart, PageContainer} from './StyledComponents'

import RouteHeader from '../RouteHeader'

class GamingPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Navbar />
              <PageContainer data-testid="home" theme={theme}>
                <div>
                  <Sidebar />
                </div>
                <HomePageHalfPart>
                  <RouteHeader heading="Gaming" />
                </HomePageHalfPart>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingPage
