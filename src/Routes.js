import React from "react";
import { Route, Switch } from "react-router-dom";

/* == containers */
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";

/* == routes */
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
