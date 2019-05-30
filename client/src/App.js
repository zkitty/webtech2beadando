import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import WorkerDetails from "./components/worker/WorkerDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
    return (
        <div className="App container-fluid p-0">
            <ToastContainer />
            <NavBar/>
            <div className="container-fluid pt-4 content-area">
                <div className="container" id="mainContent">
                    <WorkerDetails/>
                </div>
            </div>
        </div>
    );
}

export default App;
