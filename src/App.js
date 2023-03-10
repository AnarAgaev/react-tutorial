import React, { Component } from 'react'
import Header from './Header';
import Table from './Table';
import Form from './Form';
import './App.scss';

class App extends Component {

  state = { characters: [] }

  componentDidMount() {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      const json = await res.json()

      const data = json.map(({id, name, email}) => {
        return {id, name, email}
      })

      this.setState({
        ...this.state,
        characters: data
      })
    }

    getData()
  }

  removeCharacter = (id) => {
    let characters = this.state
      .characters.filter(i => i.id !== id)

    this.setState({ 
      ...this.state,
      characters
    })
  }

  addCharacter = (name, email) => {
    this.setState({
      ...this.state,
      characters: [
        ...this.state.characters,
        {
          id: Date.now(),
          name,
          email
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
