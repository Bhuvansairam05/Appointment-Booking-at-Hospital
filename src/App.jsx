import './App.css'
import { useState } from 'react'
import more from './assets/more.png'
function App() {
  const [data, setData] = useState([{ name: "Ram",age:20,gender:"Male", consult: true, time: "05:00 PM", date: "10 Sep 2025", mobile: 9087654321, drName: "Bheem", },
    { name: "Shyam",age:10,gender:"Male", consult: false, time: "05:30 PM", date: "11 Sep 2025", mobile: 9978654321, drName: "Raghu", }
  ])
  const[warning,setWarning] = useState("");
  const[formData, setFormData]= useState({
    name:"",
    age:"",
    phone:"",
    drname:"",
    gender:"male",
    date:"",
    visitType:"consult",
    age:"",
    time:""
  })
  function handleSubmit(e){
    e.preventDefault();
    const isNotEmpty = Object.values(formData).every(value=>value!=="");
    if(isNotEmpty){
      let mLength = formData.phone.length;
      
      if(mLength!=10 ){
        setWarning("Invalid mobile Number");
      }
    }
    else{
      setWarning("Enter all the fields to book appointment.");
      return;
    }
  }
  function Table() {
    return (
      <>
      <div className="table-container">
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
              data.map((item, index) => 
                <tr key={index}>
                  <td>
                    <div className="info">
                      <div className="profile"></div>
                      <div className="Details">
                        <div className="top-name">{item.name}</div>
                        <div className="bottom-text">{item.age} yrs, {item.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className='status'><button className='status-btn' style={{backgroundColor: item.consult?"green":"blue",color: "white"}}>{item.consult?"Consult":"Re Visit"}</button></td>
                  <td>
                    <div className="Details">
                      <div className="top-name">{item.time}</div>
                      <div className="bottom-text">{item.date}</div>
                    </div>
                  </td>
                  <td>
                    <div className="Details">
                      <div className="top-name">+91 {item.mobile}</div>
                      <div className="bottom-text" style={{color:"blue"}}>Contact</div>
                    </div>
                  </td>
                  <td>Dr. {item.drName}</td>
                  <td><img src={more} alt="actions" height={70} width={60}/></td>
                </tr>)
              
            }
          </tbody>
        </table>
        </div>
      </>
    )
  }

  function Form() {
    return (
      <>
        <div className="form-container">
          <form onSubmit={handleSubmit} className='form'>
            <div className="heading">Welcome to Gradious Doctor Appointment Booking</div>
            <div className="row">
              <input type="text" placeholder='Patient Name *' id='name' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
              <input type="tel" placeholder='Phone Number * (+91)' id='phone-number' value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
              <input type="text" placeholder='Doctor Name *' id='dr-name' value={formData.drname} onChange={(e)=>{setFormData({...formData,drname:e.target.value})}}/>
            </div>
            <div className="row">
              <select name="Gender" id="gender" value={formData.gender} onChange={(e)=>setFormData({...formData,gender:e.target.value})}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder='Date *' id='visit-date' value={formData.date} onChange={(e)=>{setFormData({...formData,date:e.target.value})}}/>
              <select name="TypeOfVisit" id="visit-type" value={formData.visitType} onChange={(e)=>{setFormData({...formData,visitType:e.target.value})}}>
                <option value="consult">Consult</option>
                <option value="revisit">Revisit</option>
              </select>
            </div>
            <div className="row">
              <input type="number" placeholder='Age *' id='age' value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/>
              <input type="text" placeholder='Time *' id='visit-time' value={formData.time} onChange={(e)=>setFormData({...formData,time:e.target.value})}/>
            </div>
            <div className="row">
              <button id='book-btn' type='submit'>Book Appointment</button>
            </div>
            <div className="toast-message" id='warning' >{warning}</div>
          </form>
        </div>
      </>
    )
  }
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
