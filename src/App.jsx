import './App.css'
import { useState } from 'react'
import { useRef } from 'react'
import more from './assets/more.png'
function App() {
  let nameRef = useRef();
  let ageRef = useRef();
  let genderRef = useRef();
  let visitTypeRef = useRef();
  let timeRef = useRef();
  let dateRef = useRef();
  let mobileRef = useRef();
  let drNameRef = useRef();
  const [data, setData] = useState([{ name: "Ram", age: 20, gender: "Male", consult: true, time: "05:00 PM", date: "10 Sep 2025", mobile: 9087654321, drName: "Bheem",options:false },
  { name: "Shyam", age: 10, gender: "Male", consult: false, time: "05:30 PM", date: "11 Sep 2025", mobile: 9978654321, drName: "Raghu",options:false }
  ])
  const [warning, setWarning] = useState("");
  const [updateIndex,setUpdateIndex] = useState(0);
  const [inUpdate,setInUpdate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    drname: "",
    gender: "male",
    date: "",
    visitType: "consult",
    time: "",
    options:false
  })
  function handleDelete(index){
    const sampleData = [...data];
    sampleData.splice(index,1);
    setData(sampleData);
    setWarning("Deleted Record Successfully");
    setTimeout(()=>{
      setWarning("");
    },3000);

  }
  function handleUpdate(){
    let emptyData = {
      name: "",
    age: "",
    phone: "",
    drname: "",
    gender: "male",
    date: "",
    visitType: "consult",
    time: "",
    options:false
    }
    const isNotEmpty = Object.values(formData).every(value => value !== "");
    if (isNotEmpty) {
      let regex = /^[6-9]\d{9}$/;
      let timeregex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
      if (!regex.test(formData.phone)) {
        setWarning("Invalid mobile Number");
        return;
      }
      if (!timeregex.test(formData.time)) {
        setWarning("Invalid Time");
        return;
      }
      let changedData = [...data];
      changedData[updateIndex] = formData;
      setData(changedData);
      setFormData(emptyData);
      setUpdateIndex(0);
      setInUpdate(false);
      setWarning("Record Updated Successfully");
      setTimeout(()=>{
        setWarning("");
      },3000);
    }
    else{
      setWarning("All fields are required to update");
      return;
    }
  }
  function loadData(index){
    let fetchData = {...data[index]};
    fetchData.options = false;
    nameRef.current.value = fetchData.name;
    ageRef.current.value = fetchData.age;
    genderRef.current.value = fetchData.gender;
    visitTypeRef.current.value = fetchData.visitType;
    timeRef.current.value = fetchData.time;
    dateRef.current.value = fetchData.date;
    mobileRef.current.value = fetchData.mobile;
    drNameRef.current.value = fetchData.drName;
    setFormData(fetchData);
    let sampleData = [...data];
    sampleData[index].options=false;
    setData(sampleData);
    setInUpdate(true);
    setUpdateIndex(index);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let knownData = {
      name:nameRef.current.value,
      age: ageRef.current.value,
    phone: mobileRef.current.value,
    drname: drNameRef.current.value,
    gender: genderRef.current.value,
    date: dateRef.current.value,
    visitType: visitTypeRef.current.value,
    time: timeRef.current.value,
    optoins:false
    }
    let emptyData = {
      name: "",
    age: "",
    phone: "",
    drname: "",
    gender: "male",
    date: "",
    visitType: "consult",
    time: "",
    options:false
    }
    setFormData(knownData);
    const isNotEmpty = Object.values(formData).every(value => value !== "");
    if (isNotEmpty) {
      let regex = /^[6-9]\d{9}$/;
      let timeregex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
      if (!regex.test(formData.phone)) {
        setWarning("Invalid mobile Number");
        return;
      }
      if (!timeregex.test(formData.time)) {
        setWarning("Invalid Time");
        return;
      }
      let newData = {
        name: formData.name,
        age: formData.age, 
        gender: formData.gender,
        consult: formData.visitType==="consult"?true:false, 
        time: formData.time, 
        date: formData.date, 
        mobile: formData.phone, 
        drName: formData.drname,
        options:false
      };
      setData([...data,newData]);
      setFormData(emptyData);
      setWarning("Added User Successfully");
      setTimeout(() => {
        setWarning("");
      }, 3000);
      return;
    }
    else {
      setWarning("Enter all the fields to book appointment.");
      setTimeout(()=>{
        setWarning("");
      },3000)
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
                          <div className="top-name" >{item.name}</div>
                          <div className="bottom-text">{item.age} yrs, {item.gender}</div>
                        </div>
                      </div>
                    </td>
                    <td className='status'><button className='status-btn' style={{ backgroundColor: item.consult ? "green" : "blue", color: "white" }}>{item.consult ? "Consult" : "Re Visit"}</button></td>
                    <td>
                      <div className="Details">
                        <div className="top-name">{item.time}</div>
                        <div className="bottom-text">{item.date}</div>
                      </div>
                    </td>
                    <td>
                      <div className="Details">
                        <div className="top-name">+91 {item.mobile}</div>
                        <div className="bottom-text" style={{ color: "blue" }}>Contact</div>
                      </div>
                    </td>
                    <td>Dr. {item.drName}</td>
                    <td><img src={more} alt="actions" height={70} width={60} onClick={(e)=>{
                      e.preventDefault();
                      let sData = [...data];
                      sData[index].options = true;
                      setData(sData);
                    }} /></td>
                    <td><div className="actionButtons">
                      <div className={item.options?"edit-btn":"hidden edit-btn"} onClick={(e)=>loadData(index)}>Edit</div>
                      <div className={item.options?"delete-btn":"hidden delete-btn"} onClick={(e)=>handleDelete(index)}>Delete</div>
                      </div></td>
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
              <input type="text" placeholder='Patient Name *' id='name'  ref={nameRef} />
              <input type="tel" placeholder='Phone Number * (+91)' id='phone-number' ref={mobileRef} />
              <input type="text" placeholder='Doctor Name *' id='dr-name' ref={drNameRef} />
            </div>
            <div className="row">
              <select name="Gender" id="gender" ref={genderRef}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder='Date *' id='visit-date' ref={dateRef} />
              <select name="TypeOfVisit" id="visit-type" ref={visitTypeRef}>
                <option value="consult">Consult</option>
                <option value="revisit">Revisit</option>
              </select>
            </div>
            <div className="row">
              <input type="number" placeholder='Age *' id='age' ref={ageRef} />
              <input type="text" placeholder='Time *' id='visit-time' ref={timeRef} />
            </div>
            <div className="row">
              <button id='book-btn' className={inUpdate?"hidden":""} type='submit'>Book Appointment</button>
              <button id="update" className={inUpdate?"":"hidden"} onClick={handleUpdate}>Update</button>
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
