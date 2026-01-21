import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedVideosPage from './components/SavedVideosPage'
import VideoItemDetails from './components/VideoItemDetails'
import NotFoundPage from './components/NotFoundPage'

import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: 'light', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }))
  }

  saveVideo = video => {
    const {savedVideos} = this.state
    const id = savedVideos.filter(each => each.id === video.id)
    if (id.length === 0) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      const tempVideos = savedVideos.filter(each => each.id !== video.id)
      this.setState({
        savedVideos: tempVideos,
      })
    }
  }

  render() {
    const {theme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          saveVideo: this.saveVideo,
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
          <Route exact path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
