import './App.css'
import { useState } from 'react'

function App() {
  function Table() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Status</th>
              <th>Appointment</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((key, index) => {
                <tr>
                  <td>{data[index].name}</td>
                  <td>a</td>
                  <td>ab</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </>
    )
  }

  function Form() {
    return (
      <>
        <div className="form-container">
          <form action="submit" className='form'>
            <div className="heading">Welcome to Gradious Doctor Appointment Booking</div>
            <div className="row">
              <input type="text" placeholder='Patient Name *' id='name' />
              <input type="number" placeholder='Phone Number * (+91)' id='phone-number' />
              <input type="text" placeholder='Doctor Name *' id='dr-name' />
            </div>
            <div className="row">
              <select name="Gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder='Date *' id='visit-date' />
              <select name="TypeOfVisit" id="visit-type">
                <option value="consult">Consult</option>
                <option value="revisit">Revisit</option>
              </select>
            </div>
            <div className="row">
              <input type="number" placeholder='Age *' id='age' />
              <input type="text" placeholder='Time *' id='visit-time' />
            </div>
            <div className="row">
              <button id='book-btn'>Book Appointment</button>
            </div>
            <div className="toast-message" id='warning'></div>
          </form>
        </div>
      </>
    )
  }
  const [data, setData] = useState([{ name: "Ram", consult: true, time: "05:00 PM", date: "10 Sep 2025", mobile: 9087654321, drName: "Bheem" }])
  return (
    <>
      <Form />
      <br />
      <hr />
      <Table />
    </>
  )
}


export default App
