import { useContext } from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Context/Auth';
import Social from './SocialMedia';

export const LoginTap = () => {
  let Context = useContext(Auth);
  let Navigate = useNavigate();

  let OnSubmit = (event) => {
    event.preventDefault();
    Navigate('/Dashborad/Tasks');
    Context.Updatelogin(true);
  };
  return (
    <Fragment>
      <form onSubmit={OnSubmit}>
        <div className="text-center mb-3">
          <h4 className="mb-4 mt-5">Login To Momen Task System With</h4>
          <Social />
        </div>

        <h4 className="mb-5 mt-2 text-center">or</h4>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            placeholder="Email or username"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
              />
              <label
                className="form-check-label"
                htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-main btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </Fragment>
  );
};
