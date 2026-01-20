import React from 'react'

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
})

export default ThemeContext
