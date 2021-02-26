import React from 'react'
import Home from './components/Home'
import { WaveLoading } from 'react-loadingg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.disableLoader = this.disableLoader.bind(this)
    this.timer = setTimeout(this.disableLoader, 1000);
  }

  disableLoader() {
    this.setState({loading: false});
  }

  handleLoading = () => {
    if (this.state.loading) {
      return <WaveLoading />
    }
    else {
      return <Home />
    }
  }
  render() {
    return (
      <div className="App">
        {this.handleLoading()}
      </div>
    );
  }
}

export default App;
