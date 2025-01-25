
import { useState } from 'react';
import "./EmailInput.css"


function EmailInput(){
    const [email, setEmail] = useState(null);
    const validEmail = String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
 
  const handleSubmit = (e)=> {
    e.preventDefault();
   console.log("Sending email to: ", email)
  }
  
  return (
      <form className="email-form" >
        <input type="text" name="email" placeholder="Ingrese E-mail" onChange={e=> setEmail(e.target.value)}/>
        <button onClick={handleSubmit} className="form-btn" disabled={!validEmail}>Enviar</button>
      </form>
  )}
export default EmailInput;
