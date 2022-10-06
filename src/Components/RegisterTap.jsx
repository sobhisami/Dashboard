import { useContext } from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../Context/Auth';
import Social from './SocialMedia';

export const RegisterTap = () => {
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
          <h4 className="mb-4 mt-5">Register in Momen Task System with</h4>
          <Social />
        </div>

        <h4 className="mb-4 mt-5 text-center">or:</h4>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerUsername"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label
            className="form-check-label"
            htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-main btn-block mb-3">
          Sign in
        </button>
      </form>
    </Fragment>
  );
};
