/* eslint-disable react/prop-types */

function Todo({todo}){
    return(
        <div className="Todo">
            {todo.text}
        </div>
    )
}

export default Todo;