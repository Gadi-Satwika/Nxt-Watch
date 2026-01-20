import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../ThemeContext'
import {
  LoginFormContainer,
  LoginForm,
  AppLogoContainer,
  AppLogo,
  LabelName,
  InputField,
  ShowPasswordContainer,
  LoginButton,
  ErrorMessage,
} from './StyledComponents'

class LoginPage extends Component {
  state = {username: '', password: '', errorMsg: '', showPassword: false}

  usernameInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passwordInput = event => {
    this.setState({
      password: event.target.value,
    })
  }

  submitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const api = 'https://apis.ccbp.in/login'
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorMsg: data.error_msg,
      })
    }
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          console.log(theme)
          const logorul =
            theme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginFormContainer theme={theme}>
              <LoginForm theme={theme}>
                <AppLogoContainer>
                  <AppLogo src={logorul} alt="nxt watch logo" />
                </AppLogoContainer>

                <LabelName htmlFor="username" theme={theme}>
                  USERNAME
                </LabelName>
                <InputField
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={this.usernameInput}
                  theme={theme}
                />

                <LabelName htmlFor="password" theme={theme}>
                  PASSWORD
                </LabelName>
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  onChange={this.passwordInput}
                  theme={theme}
                />

                <ShowPasswordContainer>
                  <input
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onShowPassword}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </ShowPasswordContainer>

                <LoginButton type="button" onClick={this.submitCredentials}>
                  Login
                </LoginButton>

                {errorMsg !== '' && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginForm>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginPage
