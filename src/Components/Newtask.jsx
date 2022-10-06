import { useRef } from 'react';
import { useContext } from 'react';
import { Fragment } from 'react';
import Swal from 'sweetalert2';
import { TaskContext } from '../Context/Task-Contect';
export default function NewTask() {
let Constext=useContext(TaskContext);
  let ONSubmit = (event) => {
    event.preventDefault();
    if (cheak()) {
      SaveObject();
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: true,
        timer: 1500,
      });
    }
    Clear();
  };
  let Clear = () => {
    NameRef.current.value = '';
    DetailRef.current.value = '';
    StartDateRef.current.value = '';
    EndDateRef.current.value = '';
  };
  let cheak = () => {
    if (
      NameRef.current.value != '' &&
      DetailRef.current.value != '' &&
      StartDateRef.current.value != '' &&
      EndDateRef.current.value != ''
    ) {
      return true;
    }
    MassageError();
    return false;
  };
  const MassageError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'please Enter Data!',
    });
  };

  let SaveObject = () => {
    let Object = {
      id: Date.now(),
      name: NameRef.current.value,
      detail: DetailRef.current.value,
      start: StartDateRef.current.value,
      endDateRef: EndDateRef.current.value,
      status:'Waiting',
    };
    console.log(Object);
    Constext.settask(New=>{
     return [Object,...New]
    })
  };
  let NameRef = useRef();
  let StatusRef = useRef();
  let DetailRef = useRef();
  let StartDateRef = useRef();
  let EndDateRef = useRef();

  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 mt-3">Add New Task </h1>
        </div>

        <form
          onSubmit={ONSubmit}
          className="row mt-5">
          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Task name</label>
              <input
                type="texy"
                id="loginName"
                className="form-control"
                placeholder="Task name"
                ref={NameRef}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Task Status</label>
              <select
                ref={StatusRef}
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autoComplete="off">
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Waiting">Waiting</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Image For Task</label>
              <input
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
          </div>

          <div className="col-md-12">
            <label className="form-label">Task Details</label>
            <div className="form-outline mb-4">
              <textarea
                ref={DetailRef}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline mb-4">
              <label className="form-label">Start date</label>
              <input
                ref={StartDateRef}
                type="date"
                className="form-control"
                placeholder="Task name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">End date</label>
            <div className="form-outline mb-4">
              <input
                ref={EndDateRef}
                type="date"
                className="form-control"
                placeholder="Task name"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="pull-right btn btn-main mb-4">
              Add New Task
            </button>
          </div>
        </form>
      </main>
    </Fragment>
  );
}
