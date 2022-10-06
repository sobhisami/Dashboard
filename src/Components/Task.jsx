import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Fragment } from 'react';
import { NavLink} from 'react-router-dom';
import { TaskContext } from '../Context/Task-Contect';
import logo from '../Resources/img/1.png';
export default function Task(props) {
  let Context=useContext(TaskContext);
   const Deleted=()=>{
    let Filter=Context.taskArray.filter(element=>element.id!=props.show.id)
    Context.settask(Filter)
   }
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card task card">
          <img
            src={logo}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.show.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span data-feather="calendar"></span> {props.show.start}
              <span className="main-color"> To </span> {props.show.endDateRef}
            </h6>
            <p className="card-text">
            c
            </p>
            <hr />
            <span className="btn badge-light-warning status-btn Wating">
            {props.show.status}
            </span>

            <NavLink
             to={`/Dashborad/Tasks/${props.show.id}/Detailes`}
              className="btn btn-bg-gray pull-right">
              <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
            <NavLink onClick={Deleted} className='Delate '>
              <FontAwesomeIcon icon={faTrashCan} />
             </NavLink>

          </div>
        </div>
      </div>
    </Fragment>
  );
}
