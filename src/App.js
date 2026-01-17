import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedVideosPage from './components/SavedVideosPage'
import VideoItemDetails from './components/VideoItemDetails'

import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: 'light'}

  toggleTheme = () => {
    console.log('Got neat toggle theme')
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    const {theme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute exact path="/gaming" component={GamingPage} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosPage}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
