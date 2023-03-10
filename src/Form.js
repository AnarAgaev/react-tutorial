import { useState } from "react";

const Form = ({ addCharacter }) => {
  
  const [state, setState] = useState({name: '', email: ''})
  
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = () => {
    const {name, email} = state

    if (name !== '' && email !== '') {
      addCharacter(name, email)
      setState({name: '', email: ''})
    }
  }

  return(
      <>
        <h2>Add New Item</h2>
        <form action="#">
          <label>
            <span>Name</span>
            <input type="text" 
              name="name" 
              placeholder="Enter a name here"
              value={state.name}
              onChange={handleChange} />
          </label>

          <label>
            <span>Email</span>
            <input type="email" 
              name="email" 
              placeholder="Enter an email here"
              value={state.email}
              onChange={handleChange} />
          </label>
          
          <button type="button" 
            onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </>
    )
}

export default Form