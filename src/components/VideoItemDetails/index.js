import {Component} from 'react'
import Cookies from 'js-cookie'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

import {PageContainer} from '../HomePage/StyledComponents'

const status = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {currentStatus: status.initial, videosData: {}}

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
      default:
        return null
    }
  }

  successView = () => {
    const {videosData} = this.state
    const {title} = videosData
    return (
      <div>
        <p>{title}</p>
      </div>
    )
  }

  render() {
    console.log('video')
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
