import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
//import AuthorsPage from "./components/author/AuthorsPage";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage}/>
            {/* <Route path="/authors" component={AuthorsPage}/> */}
        </Switch>
    </div>
);

export default Routes;