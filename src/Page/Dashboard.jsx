import { Fragment, useContext } from 'react';
import { Tasks } from '../Components/Tasks';
import Nav from '../Components/Nav';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '../Context/Auth';

export const DashboradPage = () => {
  let Context = useContext(Auth);
  let Navigate = useNavigate();
  let OnClick=()=>{ 
  Navigate("/login",{replace:true})
  Context.Updatelogin(false)
  }
  return (
    <Fragment>
      <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
          href="#">
          Sobhi Task
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button onClick={OnClick}
              className="nav-link px-3 btn-light-main btn"
             >
                <FontAwesomeIcon icon={faSignOut}/>
              Sign out
            </button>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <Nav />
         <Outlet/>
        </div>
      </div>
    </Fragment>
  );
};
