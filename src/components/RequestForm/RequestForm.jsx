import { useState } from 'react';
import { useDataStore } from '../../Store/dataStore';
import { requestPlan } from '../../utils/requestPlan';
import "./RequestForm.css"

function RequestForm(){
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [code, setCode] = useState(null);
    const updateModalStatus = useDataStore( state => state.updateModalStatus);
    const setPlan = useDataStore(state => state.setPlan)

  const handleSubmit = async (e)=> {
    e.preventDefault();
    updateModalStatus(true)
    const result = await requestPlan(name, lastName, code)
    console.log("plan?", result)
    setPlan(result);
  }
   
  return (
    <div className="form-container"  >
      <h1 className="form-title">¡Bienvenido a tu gestión de Asistencia Funeraria!</h1>
      <h2 className="form-subtitle">Accede a tu programa de beneficios</h2>
      <form className="form" >
        <input type="text" name="name" placeholder="Nombres" onChange={e=> setName(e.target.value)}/>
        <input type="text" name="lastName" placeholder="Apellidos" onChange={e=> setLastName(e.target.value)}/>
        <input type="text" name="code" placeholder="Código de suario" onChange={e=> setCode(e.target.value)}/>
        <button onClick={handleSubmit} className="form-btn" disabled={!name || !lastName || !code}>Consultar</button>
      </form>
    </div>
  )}
export default RequestForm;
