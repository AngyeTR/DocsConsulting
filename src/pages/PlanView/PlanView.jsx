import {useDataStore } from "../../Store/dataStore";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../components/EmailInput/EmailInput";
import "./PlanView.css"
import  PDFGenerator  from "../../utils/PDFGenerator/printPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

function PlanView(){
    const plan = useDataStore(state => state.plan)
    const setPlan = useDataStore(state => state.setPlan)
    const navigate = useNavigate();
    const updateModalStatus = useDataStore(state => state.updateModalStatus)
    const preexist = plan.hasPreexistingCoverage ? "Si" : "No"
    const adaptedPlan = {
        name: `${plan.firstName} ${plan.lastName}`,
        clientId: plan.customerCode,
        clientAge: "30",
        preexist: preexist,
        nationality: plan.nationality,
        issueDate: "06/06/2024",
        start: "01/01/2025",
        exp: "06/06/2025"
    }
    const fileName= `Voucher${plan.customerCode}.pdf`

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
            <PDFDownloadLink 
            document={<PDFGenerator plan={adaptedPlan}/>}
            fileName={fileName} >

                <button > Descargar</button>
            </PDFDownloadLink>
            
            <EmailInput/>
            <div className="container-link">
                <a onClick={handleClick} className="new-link">Nueva Busqueda</a>

            </div>
        </div>
    )
}

export default PlanView;