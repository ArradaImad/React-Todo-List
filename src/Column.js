import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import tw from "tailwind-styled-components"

const Container = tw.div`
    bg-white p-4 flex flex-col space-y-4 rounded-md
    ${props => props.isDraggingOver ? 'border border-dashed border-2 border-sky-400': 'border-0'}
`;

function Column(props) {
    return (
        <div className="w-56 md:w-64 lg:w-80 xl:w-96">
            <div className="h-12 bg-white flex justify-center items-center mb-6 rounded-md">
                <h3 className="uppercase font-sans text-3xl">{props.column.title}</h3>
            </div>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <Container 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {props.tasks.map((task, index) => {
                            console.log("COLUMN ID", task.id);
                            return <Task id={task.id} key={task.id} task={task} index={index} showModal={props.showModal} setCurrentTask={props.setCurrentTask} deleteCurrentTask={props.deleteCurrentTask}/>
                        })}
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </div>
    );
}

export default Column;