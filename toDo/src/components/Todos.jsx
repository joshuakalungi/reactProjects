import Next7Days from "./Next7Days";
import Todo from "./Todo";


// eslint-disable-next-line react/prop-types
function Todos(){
    return(
        <div className="Todos">
            <Todo/>
            <Next7Days/>
        </div>
    )
}

export default Todos;