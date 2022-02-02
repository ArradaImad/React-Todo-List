import React, { useEffect, useState } from "react";
import {loadToSeconds, secondsToLoad} from "./util/util";

// class EditionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             task: {
//                 title: props.currentTask.title,
//                 description: props.currentTask.description,
//                 load: props.currentTask.load,
//             } ,
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }



//     handleChange = (e) => {
//         switch (e.target.id) {
//             case "task-title":
//                 this.setState({
//                     task: {
//                         ...this.state.task,
//                         title: e.target.value,
//                     }
//                 });
//                 break;
//             case "task-description":
//                 this.setState({
//                     task: {
//                         ...this.state.task,
//                         description: e.target.value,
//                     }
//                 });
//                 break;
//             case "task-load":
//                 this.setState({
//                     task: {
//                         ...this.state.task,
//                         load: e.target.value,
//                     }
//                 });
//                 break;
//             default:

//         }
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("EDITION SUBMIT", this.state.task);
//         let task = { id: this.props.currentTask.id, title: this.state.task.title, description: this.state.task.description, load: loadToSeconds(this.state.task.load) };
//         this.props.handleSubmit(task);
//     };

//     render() {
//         console.log("EDITION STATE", this.state.task);
//         console.log("EDITION PROPS", this.props.currentTask);
//         return (
//             <form className="w-full h-full" onSubmit={this.handleSubmit}>
//                 <h2 className="text-xl text-center font-bold mb-6">Edition of a task</h2>
//                 <div className="mb-3">
//                     <input type="text" name="task-title" id="edit-task-title" value={this.state.task.title} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Title of the task"/>
//                 </div>
//                 <div className="mb-3">
//                     <textarea name="edit-task-description" id="edit-task-description" value={this.state.task.description} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm mb-0" placeholder="Description of the task"></textarea>
//                 </div>
//                 <div className="mb-4">
//                     <input type="text" name="edit-task-load" id="edit-task-load" value={secondsToLoad(this.state.task.load)} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Estimated work load, e.g 1d 6h 30m 45s"/>
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                     <button type="button" className="py-2 px-4 rounded-md bg-gray-500 text-white" onClick={this.props.handleClose}>Cancel</button>
//                     <button type="submit" className="py-2 px-4 rounded-md bg-blue-700 text-white font-bold">Save Task</button>
//                 </div>
//             </form>
//         );
//     }
// }

function EditionForm (props) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskLoad, setTaskLoad] = useState('');

    useEffect(() => {
        setTaskTitle( props.currentTask.title);
        setTaskDescription(props.currentTask.description);
        setTaskLoad(props.currentTask.load);
    }, [props.currentTask]);

    // const handleChange = (e) => {
    //     switch (e.target.id) {
    //         case "task-title":
    //             setTask({title: e.target.value});
    //             break;
    //         case "task-description":
    //             setTask({description: e.target.value});
    //             break;
    //         case "task-load":
    //             setTask({load: loadToSeconds(e.target.value)});
    //             break;
    //         default:
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTask = { id: props.currentTask.id, title: taskTitle, description: taskDescription, load: taskLoad };
        props.handleSubmit(newTask);
    };

    return (
        <form className="w-full h-full" onSubmit={handleSubmit}>
            <h2 className="text-xl text-center font-bold mb-6">Edition of a task</h2>
            <div className="mb-3">
                <input type="text" name="task-title" id="edit-task-title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Title of the task"/>
            </div>
            <div className="mb-3">
                <textarea name="edit-task-description" id="edit-task-description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm mb-0" placeholder="Description of the task"></textarea>
            </div>
            <div className="mb-4">
                <input type="text" name="edit-task-load" id="edit-task-load" value={secondsToLoad(taskLoad)} onChange={(e) => setTaskLoad(e.target.value)} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Estimated work load, e.g 1d 6h 30m 45s"/>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="py-2 px-4 rounded-md bg-gray-500 text-white" onClick={props.handleClose}>Cancel</button>
                <button type="submit" className="py-2 px-4 rounded-md bg-blue-700 text-white font-bold">Save Task</button>
            </div>
        </form>
    );
}


export default EditionForm;