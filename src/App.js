import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import initialData from './initialData';
import CreationForm from './CreationForm';
import EditionForm from './EditionForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCreationForm: false,
      showEditionForm: false,
      data: initialData,
      taskToEdit: 0,
    };
    this.showModalCreation = this.showModalCreation.bind(this);
    this.hideModalCreation = this.hideModalCreation.bind(this);
    this.showModalEdition = this.showModalEdition.bind(this);
    this.hideModalEdition = this.hideModalEdition.bind(this);
    this.setTaskToEdit = this.setTaskToEdit.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    
  }

  setTaskToEdit = (taskId) => {
    this.setState({ ...this.state, taskToEdit: taskId });
  }

  showModalCreation = () => {
    this.setState({ showCreationForm: true });
  };

  hideModalCreation = () => {
    this.setState({ showCreationForm: false });
  };

  addTask = (task) => {
    let tasks = this.state.data.tasks;
    let columnTasks = this.state.data.columns['column-1'];
    columnTasks.taskIds.push(task.id);
    tasks[task.id] = task;
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        tasks: tasks,
        columns: {
          ...this.state.data.columns,
          'column-1': {
            ...columnTasks,
          },
        }
      }
    });
  }

  showModalEdition = () => {
    this.setState({ showEditionForm: true });
  };

  hideModalEdition = () => {
    this.setState({ ...this.state, showEditionForm: false });
  };

  editTask = (task) => {
    let tasks = this.state.data.tasks;
    tasks[this.state.taskToEdit] = task;
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        tasks: tasks,
      }
    })
  }

  deleteTask = (taskId) => {
    let tasks = this.state.data.tasks;
    delete tasks[taskId];
    let newColumns = this.state.data.columns;
    for (const column in this.state.data.columns) {
      console.log(this.state.data.columns[column].taskIds.filter(id => id !== taskId));
      newColumns[column].taskIds = this.state.data.columns[column].taskIds.filter(id => id !== taskId);
    }
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        tasks: tasks,
        columns: newColumns,
      }
    })
  }

  getTaskById = (id) => {
    let tasks = this.state.data.tasks;
    return  tasks[id]? tasks[id] : {title: '', description: '', load: ''};
  } 

  render() {
    return (
      <div className="min-h-screen bg-slate-100">
        <Header showModal={this.showModalCreation}/>
        <Main data={this.state.data} showModal={this.showModalEdition} setCurrentTask={this.setTaskToEdit} deleteCurrentTask={this.deleteTask}/>
        <Modal show={this.state.showCreationForm} handleClose={this.hideModalCreation}>
          <CreationForm handleClose={this.hideModalCreation} handleSubmit={this.addTask} />
        </Modal>
        <Modal show={this.state.showEditionForm} handleClose={this.hideModalEdition}>
          <EditionForm handleClose={this.hideModalEdition} handleSubmit={this.editTask} currentTask={this.getTaskById(this.state.taskToEdit)}/>
        </Modal>
      </div>
    );
  }
}

export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'hey hey'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(str) {
//     alert('A name was submitted: ' + str);
//   }

//   render() {
//     return (
//       <Child value={this.state.value} handleSubmit={this.handleSubmit}/>
//     );
//   }
// }

// export default App;

// class Child extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: props.value};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.handleSubmit(this.state.value);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }