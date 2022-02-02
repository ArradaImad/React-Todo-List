import React from "react";
import {loadToSeconds, uniqueID} from "./util/util";

class CreationForm extends React.Component {

    state = {
        task: {
            title: '',
            description: '',
            load: '',
        },
    }

    handleChange = (e) => {
        switch (e.target.id) {
            case "task-title":
                this.setState({
                    ...this.state,
                    task: {
                        ...this.state.task,
                        title: e.target.value,
                    }
                });
                break;
            case "task-description":
                this.setState({
                    ...this.state,
                    task: {
                        ...this.state.task,
                        description: e.target.value,
                    }
                });
                break;
            case "task-load":
                this.setState({
                    ...this.state,
                    task: {
                        ...this.state.task,
                        load: e.target.value,
                    }
                });
                break;
            default:

        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Create the task
        let task = { id: 'task-' + uniqueID(), title: this.state.task.title, description: this.state.task.description, load: loadToSeconds(this.state.task.load) };
        // Adding it to parent state
        this.props.handleSubmit(task);
    };

    render() {
        return (
            <form className="w-full h-full" onSubmit={this.handleSubmit}>
                <h2 className="text-xl text-center font-bold mb-6">Creation of a task</h2>
                <div className="mb-3">
                    <input type="text" name="task-title" id="task-title" value={this.state.task.title} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Title of the task"/>
                </div>
                <div className="mb-3">
                    <textarea name="task-description" id="task-description" value={this.state.task.description} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm mb-0" placeholder="Description of the task"></textarea>
                </div>
                <div className="mb-4">
                    <input type="text" name="task-load" id="task-load" value={this.state.task.load} onChange={this.handleChange} className="border border-gray-200 rounded-md w-full px-2 py-1 placeholder:text-sm" placeholder="Estimated work load, e.g 1d 6h 30m 45s"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button type="button" className="py-2 px-4 rounded-md bg-gray-500 text-white" onClick={this.props.handleClose}>Cancel</button>
                    <button type="submit" className="py-2 px-4 rounded-md bg-blue-700 text-white font-bold">Create Task</button>
                </div>
            </form>
        );
    }
}

export default CreationForm;