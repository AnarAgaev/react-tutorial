import { Component } from "react";

class Character extends Component {
  render() {
    const { id, name, email } = this.props.data
    return(
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button type="button" 
            onClick={() => this.props.removeCharacter(id)}>
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Character