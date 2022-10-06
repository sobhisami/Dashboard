import { useContext } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from '../Context/Auth';

export default function Nav() {
  let Context = useContext(Auth);
  return (
    <Fragment>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? 'nav-link active' : 'nav-link '
                }
                aria-current="page"
                to="/Dashborad/Tasks"
                end>
                <span data-feather="home"></span>
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(props) =>
                  props.isActive ? 'nav-link active' : 'nav-link '
                }
                to="/Dashborad/NewTask">
                <span data-feather="file"></span>
                Add New Task
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
