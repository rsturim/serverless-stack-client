import React from "react";
import { Route, Switch } from "react-router-dom";

/* == containers */
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import Signup from "./containers/Signup";

/* == routing helpers */
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />

            {/* Unauthenticated containers */}
            <UnauthenticatedRoute
                path="/login"
                exact
                component={Login}
                appProps={appProps}
            />
            <UnauthenticatedRoute
                path="/signup"
                exact
                component={Signup}
                appProps={appProps}
            />

            <UnauthenticatedRoute
                path="/login/reset"
                exact
                component={ResetPassword}
                appProps={appProps}
            />

            {/* Authenticated containers */}
            <AuthenticatedRoute
                path="/settings"
                exact
                component={Settings}
                appProps={appProps}
            />
            <AuthenticatedRoute
                path="/notes/new"
                exact
                component={NewNote}
                appProps={appProps}
            />
            <AuthenticatedRoute
                path="/notes/:id"
                exact
                component={Notes}
                appProps={appProps}
            />
            <AppliedRoute
                path="/settings"
                exact
                component={Settings}
                appProps={appProps}
            />

            {/* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    );
}
