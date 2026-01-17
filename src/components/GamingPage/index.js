import {Component} from 'react'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

class GamingPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Navbar />
              <div theme={theme}>
                <Sidebar />
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingPage
