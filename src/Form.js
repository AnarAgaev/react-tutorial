import { Component } from "react";

const initialState = {
  name: '',
  email: ''
}

class Form extends Component {

  state = initialState;

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const {name, email} = this.state

    if (name !== '' && email !== '') {
      this.props.addCharacter(name, email)
      this.setState(initialState)
    }
  }

  render() {
    return(
      <>
        <h2>Add New Item</h2>
        <form action="#">
          <label>
            <span>Name</span>
            <input type="text" 
              name="name" 
              placeholder="Enter a name here"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>

          <label>
            <span>Email</span>
            <input type="email" 
              name="email" 
              placeholder="Enter an email here"
              value={this.state.email}
              onChange={this.handleChange} />
          </label>
          
          <button type="button" 
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </>
    )
  }
}

export default Form