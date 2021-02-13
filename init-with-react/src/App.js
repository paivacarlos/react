 import React from 'react'

class App extends React.Component {

  state = {
    name: ''
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value 
    })
  }

  render(){
    return (
      <>
        <input type="text" value={this.state.name} onChange= {this.changeName} />
        <h1>Hello {this.state.name}</h1>
      </>
    )
  }
}

export default App;
