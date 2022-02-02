import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Modal extends React.Component {
    render() {
        const showHideClassName = this.props.show ? "modal block fixed top-0 w-screen h-screen" : "modal hidden";
        return (
            <div className={showHideClassName}>
                <div className="bg-black opacity-50 w-full h-full"></div>
                <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
                    <div className="container mx-auto max-w-lg flex flex-col bg-white rounded-lg p-8 relative">
                        <button type="button"  onClick={this.props.handleClose} className='absolute right-0 mr-8 h-6 w-6 rounded-md flex justify-center items-center hover:bg-slate-400 text-gray-500 fa-fw hover:text-white'>
                            <FontAwesomeIcon icon={faTimes} className="text-xs"/>
                        </button>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;