import { Component } from "react";
import Character from "./Character";

class Table extends Component {
  render() {
    const { characters, removeCharacter } = this.props
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
}

export default Table 