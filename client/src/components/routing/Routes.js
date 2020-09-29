import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Alert from "../../components/layout/Alert";
import Dashboard from "../../components/dashboard/Dashboard";
import PrivateRoute from "../../components/routing/PrivateRoute";
import CreateProfile from "../../components/profile-forms/CreateProfile";
import EditProfile from "../../components/profile-forms/EditProfile";
import Profiles from "../../components/profiles/Profiles";
import Profile from "../../components/profile/Profile";
import AddExperience from "../../components/profile-forms/AddExperience";
import AddEducation from "../../components/profile-forms/AddEducation";
import PageNotFound from "../../components/routing/Routes";

const Routes = () => {
  return (
    <div>
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profiles">
            <Profiles />
          </Route>
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="*">
            <PageNotFound />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/create-profile">
            <CreateProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/edit-profile">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/add-experience">
            <AddExperience />
          </PrivateRoute>
          <PrivateRoute exact path="/add-education">
            <AddEducation />
          </PrivateRoute>
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
