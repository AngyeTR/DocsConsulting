import { FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

import "./Notification.css"
import { useDataStore } from "../../Store/dataStore";

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
            return(
                <>
                    <VscLoading className="loadingIcon"/>
                    <p className="notification-text">Loading</p>
                </>
            )  }
        else if(plan.error || plan.message){
            return(
                <>
                    <FaRegCircleXmark className="sucessIcon"/>
                    <p className="notification-text">{plan.message ? plan.message : "Algo salió mal, por favor intente de nuevo"}</p>
                    <button onClick={handleClick}>Cerrar</button>
                </>  
                )
        }  
        else {
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

