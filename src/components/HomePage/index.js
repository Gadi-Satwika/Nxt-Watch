import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoCloseOutline, IoSearch} from 'react-icons/io5'
import Loader from 'react-loader-spinner'

import Sidebar from '../Sidebar'
import ThemeContext from '../../ThemeContext'
import Navbar from '../Navbar'
import VideoItem from '../VideoItem'

import {
  PageContainer,
  VideosDisplayContainer,
  LoaderContainer,
  FailureImage,
  BannerContainer,
  HomeLogoContainer,
  AppLogo,
  HomePageHalf,
  GetNowButton,
  CloseBanner,
  SearchContainer,
  SearchInput,
  SearchIcon,
  NoVideos,
  RetryButton,
} from './StyledComponents'

const status = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class HomePage extends Component {
  state = {
    searchInput: '',
    outputStatus: status.initial,
    videosData: '',
    displayBanner: true,
    tempSearchInput: '',
  }

  componentDidMount() {
    this.fetchAllVideos()
  }

  fetchAllVideos = async () => {
    this.setState({
      outputStatus: status.loading,
    })
    const {searchInput} = this.state
    const api = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
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

  displayVideos = theme => {
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
      <VideosDisplayContainer>
        {videosData.length !== 0 ? (
          videosData.map(eachItem => (
            <VideoItem
              key={eachItem.id}
              id={eachItem.id}
              videoDetails={eachItem}
            />
          ))
        ) : (
          <LoaderContainer theme={theme}>
            <NoVideos
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <RetryButton onClick={this.fetchAllVideos}>Retry</RetryButton>
          </LoaderContainer>
        )}
      </VideosDisplayContainer>
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

  closeBanner = () => {
    this.setState({
      displayBanner: false,
    })
  }

  searchInput = event => {
    this.setState({
      tempSearchInput: event.target.value,
    })
  }

  getSearchResults = () => {
    const {tempSearchInput} = this.state
    console.log(tempSearchInput)
    this.setState(
      {
        searchInput: tempSearchInput,
      },
      this.fetchAllVideos,
    )
  }

  render() {
    const {displayBanner} = this.state
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
                <HomePageHalf>
                  <BannerContainer
                    displayBanner={displayBanner}
                    data-testid="banner"
                  >
                    <CloseBanner onClick={this.closeBanner} data-testid="close">
                      <IoCloseOutline size={30} />
                    </CloseBanner>
                    <HomeLogoContainer>
                      <AppLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                    </HomeLogoContainer>
                    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                    <GetNowButton>GET IT NOW</GetNowButton>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.searchInput}
                      theme={theme}
                    />
                    <SearchIcon
                      onClick={this.getSearchResults}
                      data-testid="searchButton"
                    >
                      <IoSearch size={20} />
                    </SearchIcon>
                  </SearchContainer>
                  <div>{this.displayVideos(theme)}</div>
                </HomePageHalf>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomePage
