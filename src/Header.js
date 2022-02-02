import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    
    return (
        <header className="bg-white h-16">
        <div className='container mx-auto h-full flex justify-end items-center space-x-4'>
          <button type="button" className='h-10 w-10 rounded-full bg-teal-600 flex justify-center items-center' onClick={props.showModal}>
            <FontAwesomeIcon icon={faPlus} className=" text-white fa-fw"/>
          </button>
          <button type="button" className='h-10 w-10 rounded-full bg-slate-600 flex justify-center items-center'>
            <FontAwesomeIcon icon={faRocket} className=" text-white fa-fw"/>
          </button>
          <button type="button" className='h-10 w-10 rounded-full bg-red-600 flex justify-center items-center'>
            <FontAwesomeIcon icon={faTimes} className=" text-white fa-fw"/>
          </button>
        </div>
      </header>
    );
}

export default Header;