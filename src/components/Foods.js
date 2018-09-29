import React, { Component } from 'react';
import { connect } from 'react-redux';
import ramens from '../img/ramen.png';
import burger from '../img/burger.png';
import lunch from '../img/lunch.png';
import milk from '../img/milk.png';
import pan from '../img/pan.png';
import don from '../img/don.png';
import curry from '../img/curry.png';
import onigiri from '../img/onigiri.png';
import addCalorie from '../action/actions';

class Foods extends Component{
    render() {
        return (
            <div className="food-container">
                <div className="food">
                    <img src={ramens}
                        onClick={() => this.props.handleClick(this.props.foods.ramen)}
                    />
                </div>
                <div className="food">
                    <img src={onigiri}
                        onClick={() => this.props.handleClick(this.props.foods.onigiri)}
                    />
                </div>
                <div className="food">
                    <img src={burger}
                        onClick={() => this.props.handleClick(this.props.foods.burger)}
                    />
                </div>
                <div className="food">
                    <img src={pan}
                        onClick={() => this.props.handleClick(this.props.foods.pan)}
                    />
                </div>
                <div className="food">
                    <img src={milk}
                        onClick={() => this.props.handleClick(this.props.foods.milk)}
                    />
                </div>
                <div className="food">
                    <img src={lunch}
                        onClick={() => this.props.handleClick(this.props.foods.lunch)}
                    />
                </div>
                <div className="food">
                    <img src={curry}
                        onClick={() => this.props.handleClick(this.props.foods.curry)}
                    />
                </div>
                <div className="food">
                    <img src={don}
                        onClick={() => this.props.handleClick(this.props.foods.don)}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (food) => { dispatch(addCalorie(food)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foods);