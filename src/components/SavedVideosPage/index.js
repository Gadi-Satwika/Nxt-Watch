import {Component} from 'react'

import Sidebar from '../Sidebar'
import ThemeContext from '../../ThemeContext'
import Navbar from '../Navbar'

class SavedVideosPage extends Component {
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

export default SavedVideosPage
