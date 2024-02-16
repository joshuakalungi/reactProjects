import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
export default function Modal( {children , showModal, setShowModal }){

    const modalRef = useRef();

    const closeModel =  (e) => {
        if(e.target === modalRef.current){
            setShowModal(false);
        }
    }

    return (
        showModal &&
        <div className="Modal" ref={modalRef}  onClick={closeModel}>
            <div className="container">
                { children }
            </div>
        </div>
    )
}