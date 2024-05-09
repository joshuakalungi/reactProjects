import { Plus } from "react-bootstrap-icons";
import ProjectForm from "./ProjectForm";
import Modal from './Modal';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddNewProject(){
    const [projectName, setProjectName] = useState('')
    const [showModal, setShowModal]= useState(false)

    function handleSubmit(e) {

    }
    return(
        <div className="AddNewProject">
            <div className="add-button">
                <span onClick={()=>setShowModal(true)}>
                    <Plus size="20"/>
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm 
                handleSubmit={handleSubmit}
                heading='New project!'
                value={projectName}
                setValue={setProjectName}
                setShowModal={setShowModal}
                confirmButtonText="+ Add Project"
                />
            </Modal>
        </div>
    )
}

export default AddNewProject;