import { useState } from 'react';
import Modal from './Modal';
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
                </form>
            </Modal>
        </div>
    ) 
}

export default AddNewTodo;