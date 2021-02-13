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

  createComboBox = () => {
    const options = ['firstPosition', 'secondPosition', 'thirdPosition']
    const comboBoxOptions = options.map( option => <option>{option}</option>)

    return(
      <select>
        {comboBoxOptions}
      </select>
    )
  }

  componentDidMount() {
    console.log('Executed componentDidMount')
  }

  render(){
    console.log('Executed render')

    const MyCustomTagComboBox = () => this.createComboBox()
    return (
      <>
        <input type="text" value={this.state.name} onChange= {this.changeName} />
        <h1>Hello {this.state.name}</h1>
        <MyCustomTagComboBox />
      </>
    )
  }
}

export default App;
