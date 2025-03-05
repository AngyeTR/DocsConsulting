
import { useState } from 'react';
import { validateEmail } from '../../utils/validateEmail';
import "./EmailInput.css"

function EmailInput(){
    const [email, setEmail] = useState(null);
    const validEmail = validateEmail(email)
    
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
