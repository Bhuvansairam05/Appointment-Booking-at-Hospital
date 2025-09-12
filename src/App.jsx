import './App.css'

function App() {

  return (
    <></>
  )
}
function Form() {
  return (
    <>
      <div className="form-container">
        <form action="submit">
          <div className="heading">Welcome to Gradious Doctor Appointment Booking</div>
          <div className="bottomForm">
            <div className="firstRow">
                <input type="text" placeholder='Patient Name *' id='name'/>
                <input type="number" placeholder='Phone Number *' id='phone-number' />
                <input type="text" placeholder='Doctor Name *' id='dr-name'/>
            </div>
            <div className="secondRow">
              <input type="text" placeholder='Date *' id='visit-date'/>
            </div>
            <div className="thirdRow">
              <input type="number" placeholder='Age *' id='age'/>
              <input type="text" placeholder='Time *' id='visit-time'/>
            </div>
            <button id='book-btn'>Book Appointment</button>

          </div>
          <div className="toast-message"></div>
        </form>
      </div>
    </>
  )
}
export default App
