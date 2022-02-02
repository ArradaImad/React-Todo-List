import { Draggable } from 'react-beautiful-dnd';
import tw from "tailwind-styled-components";
import { secondsToLoad } from './util/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Container = tw.div`
    shadow-lg rounded-md p-4 flex flex-col relative
    ${props => (props.isDragging ? 'bg-slate-100' : 'bg-white')}
`;

function Task(props){
    const handleEditClick = () => {
        props.setCurrentTask(props.task.id);
        props.showModal();
    }

    const handleDeleteClick = () => {
        if (window.confirm("Do you want to delete this task : \"" + props.task.title + "\" ?")) {
            // props.setCurrentTask(props.task.id);
            props.deleteCurrentTask(props.task.id);
        }
    }

    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div className="absolute right-0 mr-4">
                        <button type="button" onClick={handleEditClick} className='mb-1 h-6 w-6 rounded-full flex justify-center items-center hover:bg-slate-400 text-gray-500 fa-fw hover:text-white transition duration-300 ease-in-out'>
                            <FontAwesomeIcon icon={faEdit} className="text-xs"/>
                        </button>
                        <button type="button" onClick={handleDeleteClick} className='h-6 w-6 rounded-full flex justify-center items-center hover:bg-red-400 text-gray-500 fa-fw hover:text-white transition duration-300 ease-in-out'>
                            <FontAwesomeIcon icon={faTrash} className="text-xs"/>
                        </button>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">{props.task.title}</h4>
                    <p className="italic text-slate-500 mb-2">{props.task.description}</p>
                    <p className="text-right"><span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white font-bold">{secondsToLoad(props.task.load)}</span></p>
                </Container>
            )}
        </Draggable>
    );
}

export default Task;