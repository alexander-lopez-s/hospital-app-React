import {employees} from '../Employees.js';
import '../App.css';
import { useState } from "react";

function Appointment() {
  //* Declaring the variables to use State *//
  const [searchTerm, setSearchTerm] = useState("");
    return (
      <div className='search-bar'> 
      <input type="text" placeholder="Zoeken.." onChange={
        /* targeting the user's input */
        (event) =>  {setSearchTerm(event.target.value);
        }}/> <div className="employees">     
        {employees.filter((val) => {
       /* filtering search by criteria */     
          if (searchTerm === " "){
            return val
          } else if (val.specialization.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
          
        /* displaying the employees from my database */
        }).map((employee)=>{
         return (
  
           <div className="cards">
           <img className='photos' alt="employee" src={employee.photo} />
                <p className='name'>{employee.name}</p>
                <p>Specialisatie: {employee.specialization}</p>
                <p>Email: {employee.email}</p>
                <p>Telefoon: {employee.telephone}</p>
                <button>Afspraak maken</button>
                </div>
    
        )})}
      </div>
      <div className="footer">
    <h3>Alexander Lopez - HYF 2022 - Basic React </h3>
  </div>
      </div>
      
      );
      
  };
  
  export default Appointment;