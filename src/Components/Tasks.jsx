import { useContext } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { TaskContext } from '../Context/Task-Contect';
import Task from './Task';
export const Tasks = () => {
  let Context=useContext(TaskContext);
  let [filterd,setfilterd]=useState(Context.taskArray)
  let FilterdStatus=(event)=>{
  event.preventDefault();
  if (event.target.value!='All') {
    let filterdHandle=Context.taskArray.filter(element=>element.status==event.target.value)
  setfilterd(filterdHandle) 
  }else{
    setfilterd(Context.taskArray)
  }
 
  }
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Tasks</h1>

          <div className=" mb-2 mb-md-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          </div>

          <ul className="list-inline">
            <li className="list-inline-item">
              <select onChange={FilterdStatus}
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autoComplete="off">
                <option  value="All">All</option>
                <option  value="In Progress">In Progress</option>
                <option  value="Completed">Completed</option>
                <option  value="Waiting">Waiting</option>
                <option  value="Canceled">Canceled</option>
              </select>
            </li>
         
          </ul>
        </div>
        <div className="row mt-5">
          {filterd.map(element=>( <Task key={element.id} show={element} />))}
        
        </div>
      </main>
    </Fragment>
  );
};
