import { FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDataStore } from "../../Store/dataStore";
import "./Notification.css"
import image from "../../assets/logo-mini.png"

function Notification(){
    const plan = useDataStore(state => state.plan)
    const updateModalStatus = useDataStore( state => state.updateModalStatus);
    const setPlan = useDataStore( state => state.setPlan)
   
    
    const navigate = useNavigate();

    function handleClick(){
        setPlan(null);
        updateModalStatus(false);  
    }

    function render(){
        if(!plan){
            console.log("loading")
            return(
                <>
                    <img src={image} className="loadingIcon"/> 
                    <p className="notification-text">Loading</p>
                </>
            )  }
        else if(plan.error || plan.message){
            const message = plan.status == 404 ? "Usuario no encontrado" : plan.message == "Network Error" ? "Error de red" : "Algo salió mal, por favor intente de nuevo"
            return(
                <>
                    <FaRegCircleXmark className="sucessIcon"/>
                    <p className="notification-text">{message}</p>
                    <button onClick={handleClick}>Cerrar</button>
                </>  
                )
        }  
        else {
            console.log("Exito")

            updateModalStatus(false);
            navigate("/view")
            return(<></>  ) }     
    }
    
    return(
        <div className="notification-container">
            {
                render()
            }           
        </div>
    )

}

export default Notification;

