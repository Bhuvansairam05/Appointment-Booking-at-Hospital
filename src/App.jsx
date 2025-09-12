import './App.css'

function App() {

  return (
    <>
      <Form/>
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
                <input type="text" placeholder='Patient Name *' id='name'/>
                <input type="number" placeholder='Phone Number *' id='phone-number' />
                <input type="text" placeholder='Doctor Name *' id='dr-name'/>
            </div>
            <div className="row">
              <select name="Gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder='Date *' id='visit-date'/>
              <select name="TypeOfVisit" id="visit-type">
                <option value="consult">Consult</option>
                <option value="revisit">Revisit</option>
              </select>
            </div>
            <div className="row">
              <input type="number" placeholder='Age *' id='age'/>
              <input type="text" placeholder='Time *' id='visit-time'/>
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
export default App
