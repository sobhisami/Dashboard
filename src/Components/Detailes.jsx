import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faHeading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../Context/Task-Contect';
import Task from './Task';
import logo1 from '../Resources/img/1.png'
const { Fragment } = require('react');
const DetailesPage = () => {
  let Context=useContext(TaskContext);
  let params = useParams();
  let [Task,SetTask]=useState({});
  let Fetch=()=>{
    let FeatchHandle=Context.taskArray.find(element=>element.id=params.id)
    SetTask(FeatchHandle)
    
  }
  useEffect(Fetch,[])
  let Changestatus=(New)=>{
    SetTask((Newww)=>{
   Newww.status=New;
   return {...Newww}
    })
  }
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Task - {Task.name} </h1>

          <div className=" mb-2 mb-md-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          </div>

          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button onClick={()=> Changestatus("In Progress")}
                type="button"
                className={` btn btn-sm btn-outline-secondary ${Task.status=="In Progress" && "active"}`}>
                In Progress
              </button>
              <button
                type="button" onClick={()=> Changestatus("Completed")}
                className={` btn btn-sm btn-outline-secondary ${Task.status=="Completed" && "active"}`}>
                Completed
              </button>
              <button
                type="button" onClick={()=> Changestatus("Waiting")}
                className={`btn btn-sm btn-outline-secondary ${Task.status=="Waiting" && "active"}`}>
                Waiting
              </button>
              <button
                type="button" onClick={()=> Changestatus("Canceled")}
                className={`btn btn-sm btn-outline-secondary ${Task.status=="Canceled" && "active"}`}>
                Canceled
              </button>
            </div>
            <button
              type="button"
              className="btn btn-light-main btn">
              <span data-feather="edit-3"></span> Edit
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src={logo1}
              className="img-fluid rounded de-img"
            />
          </div>
          <div className="col-md-6  mt-5">
            <div className=" mb-3">
              <span
                data-feather="bookmark"
                className="main-color"></span>
              <strong>Title:</strong> {Task.name}
            </div>
            <div className="mb-3">
              <span
                data-feather="layers"
                className="main-color"></span>
              <strong>Category:</strong> {Task.status}
            </div>
            <div className="">
              <span
                data-feather="calendar"
                className="main-color"></span>
              <strong>Date:</strong> {Task.start} to {Task.endDateRef}
            </div>
          </div>

          <div className="row mt-5">
            <div className="task-info">
              <p>
              {Task.detail}
            
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default DetailesPage;
