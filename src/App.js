
import { useState, useEffect } from 'react'
import Header from './Header';
import Table from './Table';
import Form from './Form';
import './App.scss';

const App = () => {

  const [state, setState] = useState({ characters: [] })

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      const json = await res.json()

      const data = json.map(({id, name, email}) => {
        return {id, name, email}
      })

      setState({
        ...state,
        characters: data
      })
    }

    getData()
  }, [])

  const removeCharacter = (id) => {
    let characters = state
      .characters.filter(i => i.id !== id)

    setState({characters})
  }

  const addCharacter = (name, email) => {
    setState({
      characters: [
        ...state.characters,
        {
          id: Date.now(),
          name,
          email
        }
      ]
    })
  }

  return(
    <section>
      <Header />
      <Table characters={state.characters} 
        removeCharacter={removeCharacter} />
      <Form addCharacter={addCharacter} />
    </section>
  )
}

export default App
