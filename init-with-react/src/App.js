 import React from 'react'

function App (props){

  const changeName = event => {
    console.log(event.target.value);
  }

 const createComboBox = () => {
    const options = ['firstPosition', 'secondPosition', 'thirdPosition']
    const comboBoxOptions = options.map( option => <option>{option}</option>)

    return(
      <select>
        {comboBoxOptions}
      </select>
    )
  }

  const MyCustomTagComboBox = () => createComboBox()

  return (
    <>
      <input type="text" value={props.name} onChange={changeName} />
      <h1>Hello {props.name}</h1>
      <MyCustomTagComboBox />
    </>
  )
}

export default App;
