import {Component} from 'react'
import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {GiSaveArrow} from 'react-icons/gi'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

import {PageContainer} from '../HomePage/StyledComponents'

import {
  VideoDetails,
  VideoPlayer,
  ChannelName,
  ChannelViews,
  VideoOptions,
  VideoOptionButtonsLike,
  VideoOptionButtonsDislike,
  VideoOptionButtonsArrow,
  VideoUserDetails,
  AboutChannel,
  UserProfile,
  SubscriberCount,
  Name,
  Description,
  Title,
  LoaderContainer,
} from './StyledComponents'

const status = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    currentStatus: status.initial,
    videosData: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.renderVideoItemDetails()
  }

  renderVideoItemDetails = async () => {
    this.setState({
      currentStatus: status.loading,
    })
    const propsData = this.props
    const {match} = propsData
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    if (response.ok === true) {
      const data = await response.json()
      const eachVideo = data.video_details
      const updatedData = {
        id: eachVideo.id,
        description: eachVideo.description,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        videoUrl: eachVideo.video_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
          subscriberCount: eachVideo.channel.subscriber_count,
        },
      }
      this.setState({
        currentStatus: status.success,
        videosData: updatedData,
      })
    } else {
      this.setState({
        currentStatus: status.failure,
      })
    }
  }

  displayVideoItemDetails = () => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case status.success:
        return this.successView()
      case status.loading:
        return this.loadingView()
      default:
        return null
    }
  }

  successView = () => {
    const {videosData} = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videosData
    const {name, profileImageUrl, subscriberCount} = channel
    const dateObj = new Date(publishedAt)
    const currentDateDistance = formatDistanceToNow(
      new Date(
        dateObj.getFullYear(),
        dateObj.getMonth() + 1,
        dateObj.getDate(),
      ),
    )
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const {saveVideo, savedVideos} = value
          const isPresent = savedVideos.filter(
            each => each.id === videosData.id,
          )
          const videoSaved = isPresent.length !== 0
          const saveText = videoSaved ? 'saved' : 'save'
          const {like, dislike} = this.state
          return (
            <VideoPlayer>
              <ReactPlayer url={videoUrl} width="100%" height="75vh" controls />
              <Title theme={theme}>{title}</Title>
              <VideoDetails>
                <ChannelViews>
                  <ChannelName>{viewCount} views</ChannelName>
                  <ChannelName> . {currentDateDistance}</ChannelName>
                </ChannelViews>
                <VideoOptions>
                  <VideoOptionButtonsLike like={like} onClick={this.likeVideo}>
                    <AiOutlineLike size={28} />
                    Like
                  </VideoOptionButtonsLike>
                  <VideoOptionButtonsDislike
                    dislike={dislike}
                    onClick={this.dislikeVideo}
                  >
                    <AiOutlineDislike size={28} />
                    Dislike
                  </VideoOptionButtonsDislike>
                  <VideoOptionButtonsArrow
                    videoSaved={videoSaved}
                    onClick={() => saveVideo(videosData)}
                  >
                    <GiSaveArrow size={28} />
                    {saveText}
                  </VideoOptionButtonsArrow>
                </VideoOptions>
              </VideoDetails>
              <hr />
              <VideoUserDetails>
                <UserProfile src={profileImageUrl} />
                <AboutChannel>
                  <Name theme={theme}>{name}</Name>
                  <SubscriberCount>
                    {subscriberCount} subscribers
                  </SubscriberCount>
                  <Description theme={theme}>{description}</Description>
                </AboutChannel>
              </VideoUserDetails>
            </VideoPlayer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  loadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={theme === 'light' ? '#000000' : '#ffffff'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  likeVideo = () => {
    const {dislike} = this.state
    if (!dislike) {
      this.setState(prevState => ({
        like: !prevState.like,
      }))
    } else {
      this.setState(
        prevState => ({
          like: !prevState.like,
        }),
        this.dislikeVideo(),
      )
    }
  }

  dislikeVideo = () => {
    const {like} = this.state
    if (!like) {
      this.setState(prevState => ({
        dislike: !prevState.dislike,
      }))
    } else {
      this.setState(
        prevState => ({
          dislike: !prevState.dislike,
        }),
        this.likeVideo(),
      )
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Navbar />
              <PageContainer theme={theme}>
                <div>
                  <Sidebar />
                </div>
                <div>{this.displayVideoItemDetails()}</div>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
