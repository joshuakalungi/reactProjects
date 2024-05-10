/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectForm from './ProjectForm'

// eslint-disable-next-line react/prop-types
function RenameProject({project, setShowModal}){
    const [newProjectName, setNewProjectName] = useState(project.name)
    console.log(project.name)

    function handleSubmit(e){

    }
    return(
        <div className="RenameProject">
            <ProjectForm 
                handleSubmit={handleSubmit}
                heading='Edit project name!'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText="Confirm"
                />
        </div>
    )
}

export default RenameProject;