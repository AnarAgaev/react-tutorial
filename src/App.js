import React, { Component } from 'react'
import Header from './Header';
import Table from './Table';
import Form from './Form';
import './App.scss';

const mockData = [
  { id: 1, name: 'Smith', job: 'Secret Agent' },
  { id: 2, name: 'Forest', job: 'Worker' },
  { id: 3, name: 'Susan', job: 'Waiter' }
]

class App extends Component {

  state = {
    characters: mockData
  }

  removeCharacter = (id) => {
    let characters = this.state
      .characters.filter(i => i.id !== id)

    this.setState({ 
      ...this.state,
      characters
    })
  }

  addCharacter = (name, job) => {
    this.setState({
      ...this.state,
      characters: [
        ...this.state.characters,
        {
          id: Date.now,
          name,
          job
        }
      ]
    })
  }

  render() {
    return(
      <section>
        <Header />
        <Table characters={this.state.characters} 
          removeCharacter={this.removeCharacter} />
        <Form addCharacter={this.addCharacter} />
      </section>
    )
  }
}

export default App
