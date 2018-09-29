import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "./components/Header";
import CaloryCircular from "./components/CaloryCircular";
import Foods from "./components/Foods";

class App extends Component{
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                <CaloryCircular
                    current_cal={this.props.current_cal}
                    daily_target={this.props.daily_target}
                />
                    <Foods />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps)(App);