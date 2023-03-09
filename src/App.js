import React, { Component } from 'react'
import './App.scss';

class App extends Component {
  render() {
    return(
      <section>
        <h1>React Totorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>Name example</td>
                <td>Job example</td>
                <td><button type="button">Delete</button></td>
              </tr>
          </tbody>
        </table>
        <h2>Add New Item</h2>
        <form action="#">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Enter a name here" />
          </label>
          <label>
            <span>Job</span>
            <input type="text" name="job" placeholder="Enter a job here" />
          </label>
          <button type="button">Submit</button>
        </form>
      </section>
    )
  }
}

export default App
