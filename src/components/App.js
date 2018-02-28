import React from "react";
import Routes from "../routes";
import Header from "./common/Header";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default App;