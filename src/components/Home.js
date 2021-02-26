import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'

class Home extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <About />
        <Contact />
      </>
    )
  }
}

export default Home
