import {useDataStore } from "../../Store/dataStore";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../components/EmailInput/EmailInput";
import "./PlanView.css"

function PlanView(){
    const plan = useDataStore(state => state.plan)
    const setPlan = useDataStore(state => state.setPlan)
    const navigate = useNavigate();
    const updateModalStatus = useDataStore(state => state.updateModalStatus)

    const handleClick = ()=>{
        setPlan(null);
        updateModalStatus(false);
        navigate("/");

    }

    return(
        <div className="view-container">
            <div className="view">
                <p>Nombre: <span>{plan.firstName}</span></p>
                <p>Apellido de Inicio <span>{plan.lastName}</span></p>
                <p>Nacionalidad: <span>{plan.nationality}</span></p>
                <p>Código de Cliente: <span> {plan.customerCode}</span></p>
                <p>Destino: <span> {plan.destination[0]}</span></p>
            </div>
            
            <button> Descargar</button>
            <EmailInput/>
            <div className="container-link">
                <a onClick={handleClick} className="new-link">Nueva Busqueda</a>

            </div>
        </div>
    )
}

export default PlanView;