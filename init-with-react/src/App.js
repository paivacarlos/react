 import React from 'react'

class App extends React.Component {
  render(){

    this.state = {
      name: 'Carlos Paiva'
    }

    return (
      <h1>Hello {this.state.name}</h1>
    )
  }
}

export default App;
