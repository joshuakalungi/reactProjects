import Project from "./Project";
import AddNewProject from "./AddNewProject";

// eslint-disable-next-line react/prop-types
function Projects(){
    return(
        <div className="Projects">
            <Project/>
            <AddNewProject/>
        </div>
    )
}

export default Projects;