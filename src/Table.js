import Character from "./Character";

const Table = ({ characters, removeCharacter }) => {
  return(
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          { 
            characters.map( character => <Character 
              key={character.id} 
              data={character} 
              removeCharacter={removeCharacter} /> ) 
          }
        </tbody>
      </table>
  )
}

export default Table 