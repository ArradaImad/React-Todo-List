import React from 'react';
import Dashboard from './Dashboard';

function Main(props) {
    return (
        <main>
            <h1 className="mt-4 mb-6 text-7xl font-sans font-light text-center">//TODO LIST</h1>
            <Dashboard data={props.data} showModal={props.showModal} setCurrentTask={props.setCurrentTask} deleteCurrentTask={props.deleteCurrentTask}/>
        </main>
    );
}

export default Main;