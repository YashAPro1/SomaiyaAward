import React, {  useState } from "react";
import Multiprogressbar from './Multiprogressbar'

import Navbar from "./Navbar";





const Register = () => {

  

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [Somaiyaemail, setSomaiyaEmail] = useState(null);

  const [date, setDate] = useState(null);
  const [phone, setPhone] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [department, setDepartment] = useState(null);
  const [institute, setInstitute] = useState(null);

//   const [message, setMessage] = useState(null);
const [index, setIndex] = useState(1);
  // console.log(index);
  function nextbtn() {
    if (index>=1) {
      
      console.log(index);
      setIndex(prevIndex => prevIndex+1);
    }
  }

  function prevbtn() {
    if (index<=3) {
      
      setIndex(prevIndex => prevIndex-1);
      console.log(index);
    }
  }

  function formm(step){
    
      
      switch(step) {
        case 1:
          return (
            <>
            <div className="form">
                <div style={{ marginBottom: "0.2rem", fontSize:'1.5rem', color:'rgb(222, 46, 6)', alignSelf:'flex-start' }}>
                Personal Details
                </div>

                <div style={{ 
                marginBottom: "1.0rem", 
                fontSize:'1.2rem', 
                color:'var(--primary)', 
                alignSelf:'flex-start', 
                marginTop:"1.5rem" }}>
                Email ID
                </div>
                <input placeholder="Please Enter Personal Email ID" value={email} onChange={e => setEmail(e.target.value)}/>



                <div style={{ 
                marginBottom: "1.0rem", 
                fontSize:'1.2rem', 
                color:'var(--primary)', 
                alignSelf:'flex-start', 
                marginTop:"1.5rem" }}>
                    Name Of the Faculty
                </div>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Full Name" />


                <div style={{ 
                marginBottom: "1.0rem", 
                fontSize:'1.2rem', 
                color:'var(--primary)', 
                alignSelf:'flex-start', 
                marginTop:"1.5rem" }}>
                    Name Of the Institute
                </div>
                <input value={institute} onChange={e => setInstitute(e.target.value)} placeholder="Institute Name" />

                <div style={{ 
                marginBottom: "1.0rem", 
                fontSize:'1.2rem', 
                color:'var(--primary)', 
                alignSelf:'flex-start', 
                marginTop:"1.5rem" }}>
                    Department
                </div>
                <input value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department Name" />
                <div className="formfooter">
                  <button className="btn prev" disabled={index===1} onClick={prevbtn} >Previous</button>
                  <button className="btn next" onClick={nextbtn}>Next</button>
                </div>
            </div>
            
            </>

          );
        case 2:
          return (
            <>
              <div className="form">
                <div style={{ marginBottom: "0.2rem", fontSize:'1.5rem', color:'rgb(222, 46, 6)', alignSelf:'flex-start' }}>
                  Faculty Details
                </div>
                <div style={{ 
                  marginBottom: "1.0rem", 
                  fontSize:'1.2rem', 
                  color:'var(--primary)', 
                  alignSelf:'flex-start', 
                  marginTop:"1.5rem" }}>
                      Disgnation
                  </div>
                  <input value={designation} onChange={e => setDesignation(e.target.value)} placeholder="Designation" />


                  <div style={{ 
                  marginBottom: "1.0rem", 
                  fontSize:'1.2rem', 
                  color:'var(--primary)', 
                  alignSelf:'flex-start', 
                  marginTop:"1.5rem" }}>
                      Date of Appointment 
                  </div>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Example: January 7, 2019" />

                  <div style={{ 
                  marginBottom: "1.0rem", 
                  fontSize:'1.2rem', 
                  color:'var(--primary)', 
                  alignSelf:'flex-start', 
                  marginTop:"1.5rem" }}>
                  Somaiya Email ID
                  </div>
                  <input placeholder="Please Enter Somaiya Email ID" value={Somaiyaemail} onChange={e => setSomaiyaEmail(e.target.value)}/>

                  <div style={{ 
                  marginBottom: "1.0rem", 
                  fontSize:'1.2rem', 
                  color:'var(--primary)', 
                  alignSelf:'flex-start', 
                  marginTop:"1.5rem" }}>
                  Phone Number
                  </div>
                  <input type="tel" name="telphone"  pattern="[0-9]{10}" placeholder="Please Enter Somaiya Email ID" value={phone} onChange={e => setPhone(e.target.value)}/>
                  
                  <div className="formfooter">
                  <button className="btn prev" disabled={index===1} onClick={prevbtn} >Previous</button>
                  <button className="btn next" onClick={nextbtn}>Next</button>
                </div>
              </div>
            </>
          );
        case 3:
          return (
            <>
              <div className="form">
                  <div style={{ marginBottom: "0.2rem", fontSize:'1.5rem', color:'rgb(222, 46, 6)', alignSelf:'flex-start' }}>
                  Award Catergory
                  </div>

                  <form action="#">
                  <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Award Category</div>
                  <select name="yoa" id="yoa" style={{
                      
                      borderRadius:8,
                      width:"17rem",
                      color:"gray",
                      border:"none",
                      fontSize:"1rem",
                      padding:"0.75rem",
                  }}>
                      <option value="select">Select Award Category</option>
                      <option value="Excellence in Teaching (more than 3 years of service)">Excellence in Teaching (more than 3 years of service)</option>
                      <option value="Promising Teacher of the Year (1 to 3 years of service)">Promising Teacher of the Year (1 to 3 years of service)</option>
                      
                  </select>
                  </form>

                  <div className="formfooter">
                  <button className="btn prev" disabled={index===1} onClick={prevbtn} >Previous</button>
                  <button className="btn next" onClick={nextbtn}>Next</button>
                  </div>         
              </div>  
            </>
          );
          default:
            return (
              <><h1>some error</h1></>
            );

          
      }
    
  }





  return (
    <>
    
    <Navbar/>
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      marginLeft: "5.5rem" 
      
    }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#dddddd",
          flexDirection: "column",
          padding: "3rem",
          borderRadius: "10px",
          width:"50%",
          marginTop:'150px',
          marginBottom:'150px'
        }}
      >
        <Multiprogressbar steps={index}/>
        <div style={{ fontSize: "2rem", marginBottom: "1.5rem" ,marginTop: "2rem",justifySelf:"center",alignSelf:"center"}}>
          Teaching Application
        </div>
        {formm(index)}
        

        </div>
      
    </div>
    </>
  );
};

export default Register;