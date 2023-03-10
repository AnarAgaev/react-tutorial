import { Component } from "react";

class Character extends Component {
  render() {
    const { id, name, job } = this.props.data
    return(
      <tr>
        <td>{name}</td>
        <td>{job}</td>
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