import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailesPage from "../Components/Detailes";
import NewTask from "../Components/Newtask";
import { Tasks } from "../Components/Tasks";
import { Auth } from "../Context/Auth";
import { DashboradPage } from "../Page/Dashboard";
import LoginPage from "../Page/Login";
const { Fragment } = require("react");

function Routerss() {
  let Context=useContext(Auth);
  return <Fragment>
<Routes>
<Route path="/" element={<LoginPage/>}/>
  <Route path="/login" element={ Context.loginin ? <Navigate to="/Dashborad/Tasks"/> :<LoginPage/>}/>
  <Route path="/Dashborad" element={ Context.loginin ? <DashboradPage/> : <Navigate to="/login"/> }>
  <Route path="/Dashborad/Tasks" element={<Tasks/>}/>
    <Route path="/Dashborad/NewTask" element={<NewTask/>}/>
    <Route path="/Dashborad/Tasks/:id/Detailes" element={<DetailesPage/>}/>
  </Route>
</Routes>
  </Fragment>
}
export default Routerss;