import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h3>hello react jsx</h3>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
