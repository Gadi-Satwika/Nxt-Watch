import {Component} from 'react'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

class TrendingPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Navbar />
              <div>
                <Sidebar />
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingPage
