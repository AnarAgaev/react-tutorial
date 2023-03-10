import { Component } from "react";

const initialState = {
  name: '',
  job: ''
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
    const {name, job} = this.state

    if (name === '' || job === '') return
    
    this.props.addCharacter(name, job)
    this.setState(initialState)
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
            <span>Job</span>
            <input type="text" 
              name="job" 
              placeholder="Enter a job here"
              value={this.state.job}
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