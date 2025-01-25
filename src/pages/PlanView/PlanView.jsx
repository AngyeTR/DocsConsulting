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
                <p>Producto: <span>{plan.product}</span></p>
                <p>Fecha de Inicio <span>{plan.date}</span></p>
                <p>Estado: <span>{plan.status}</span></p>
                <p>Suscriptor: <span> {plan.subscriber}</span></p>
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