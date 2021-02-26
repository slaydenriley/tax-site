import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <NavBar />
        <img src="https://www.ci.missoula.mt.us/ImageRepository/Document?documentID=46605" alt="logo"/>
        <div className="row">
          <div className="col">
            <About />
          </div>

          <div className="col">
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
