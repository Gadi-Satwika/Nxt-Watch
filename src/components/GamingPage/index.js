import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

import {
  HomePageHalfPart,
  PageContainer,
  LoaderContainer,
  FailureImage,
  RetryButton,
  HomePageHalf,
} from './StyledComponents'

import RouteHeader from '../RouteHeader'
import GamingPageVideoItem from '../GamingPageVideoItem'

const status = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class GamingPage extends Component {
  state = {outputStatus: status.initial, videosData: ''}

  componentDidMount() {
    this.fetchGamingPageDetails()
  }

  fetchGamingPageDetails = async () => {
    this.setState({
      outputStatus: status.loading,
    })
    const api = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        thumbnailUrl: eachVideo.thumbnail_url,
      }))
      this.setState({
        outputStatus: status.success,
        videosData: updatedData,
      })
    } else {
      this.setState({
        outputStatus: status.failure,
      })
    }
  }

  displayGamingVideos = theme => {
    const {outputStatus} = this.state
    switch (outputStatus) {
      case status.success:
        return this.successView(theme)
      case status.failure:
        return this.failureView(theme)
      case status.loading:
        return this.loadingView(theme)
      default:
        return null
    }
  }

  successView = theme => {
    const {videosData} = this.state
    return (
      <HomePageHalf>
        {videosData.map(eachVideo => (
          <GamingPageVideoItem videoDetails={eachVideo} />
        ))}
      </HomePageHalf>
    )
  }

  failureView = theme => (
    <LoaderContainer theme={theme}>
      <FailureImage
        src={
          theme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.{' '}
      </p>
      <RetryButton onClick={this.fetchAllVideos}>Retry</RetryButton>
    </LoaderContainer>
  )

  loadingView = theme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={theme === 'light' ? '#000000' : '#ffffff'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

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
                  {this.displayGamingVideos(theme)}
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
