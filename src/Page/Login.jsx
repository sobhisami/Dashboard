import { Fragment } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { LoginTap } from "../Components/LoginTap";
import { RegisterTap } from "../Components/RegisterTap";
export default function LoginPage() {
  return <Fragment>
    <div className="container-fluid p-5 bg-primary text-white text-center login-cover">
 
 </div>
 <div className="container ">

  <div className="row">

 
  	 <div className="col-sm-1"></div>

    <div className="col-sm-10">
   
   <div className="shadow-5-strong form-box">
    
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>

<div className="tab-content">
  <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
<LoginTap/>
  </div>
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
<RegisterTap/>
  </div>
</div>


</div>
      </div>
  <div className="col-sm-1"></div>

  </div>
</div>

  </Fragment>
}