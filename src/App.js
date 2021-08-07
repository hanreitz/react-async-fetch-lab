// create your App component here
import React, { Component } from 'react'

export class App extends Component {
  
  state = {
    peopleInSpace: []
  }
  
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({
        peopleInSpace: data.people
      }))
  }

  makeLi = () => {
    return this.state.peopleInSpace.map(person => {
      return <li key={person.name}>{person.name}</li>
    })
  }

  render() {
    return (
      <div>People Currently in Space:
        <ul>
          {this.makeLi()}
        </ul>
      </div>
    )
  }
}

export default App
