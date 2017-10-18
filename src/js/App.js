import React from "react";
import MainPage from "./MainPage";

class App extends React.Component {

    /**
     * App JSX structure.
     */
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>
                            <i className="fa fa-soccer-ball-o"/> Reservation system
                        </h1>
                    </div>
                </div>
                <MainPage/>
            </div>
        );
    }
}

export default App;
