import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';


class Dashboard extends React.Component {
    
    state = this.props.data;

    onDragEnd = (result) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // Reorder the array
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds); // Create new object instead of mutating the state
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId); // adding into destination array
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                }
            }
            this.setState(newState);
            return;
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }
        this.setState(newState);
        return;
    };

    render() {
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='container mx-auto flex justify-evenly space-x-6'>
                    {this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                            return <Column key={column.id} column={column} tasks={tasks} showModal={this.props.showModal} setCurrentTask={this.props.setCurrentTask} deleteCurrentTask={this.props.deleteCurrentTask}/>
                        })
                    }
                </div>
            </DragDropContext>
        );
    }
    
}


export default Dashboard;