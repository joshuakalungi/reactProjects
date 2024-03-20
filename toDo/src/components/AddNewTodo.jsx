import { useState } from 'react';
import Modal from './Modal';
import { Bell } from 'react-bootstrap-icons';



// eslint-disable-next-line react/prop-types
function AddNewTodo(){
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');

    return(
        <div className="AddNewTodo">
            <div className='btn'>
                <button onClick={()=>setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form>
                    <div className='text'>
                        <h3>Add new to do</h3>
                        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='To do ...' autoFocus/>
                    </div>
                    <div className='remind'>
                        <Bell />
                        <p> Remind Me!</p>git
                    </div>
                </form>
            </Modal>
        </div>
    ) 
}

export default AddNewTodo;438B-C90F   A5B8-7957