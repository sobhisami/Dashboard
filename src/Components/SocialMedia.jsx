import { Fragment } from 'react';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Social = () => {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-link btn-floating mx-1">
        <FontAwesomeIcon icon={faFacebookF} />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1">
        <FontAwesomeIcon icon={faGoogle} />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1">
        <FontAwesomeIcon icon={faTwitter} />
      </button>

      <button
        type="button"
        className="btn btn-link btn-floating mx-1">
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </Fragment>
  );
};
export default Social;
