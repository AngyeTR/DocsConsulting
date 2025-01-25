import RequestForm from "../../components/RequestForm/RequestForm";
import {useDataStore } from "../../Store/dataStore"
import Modal from "../../components/Modal/Modal"
import Notification from "../../components/Notification/Notification";

function HomePage(){
    const modalStatus = useDataStore(state => state.modalStatus)

    return(
        <div className="page-container">
           <RequestForm/>
           {
        modalStatus && (
        <Modal>
            <Notification />
        </Modal>
        )
     }
        </div>
    )
}

export default HomePage;