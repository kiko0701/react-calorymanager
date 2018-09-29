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
                        onClick={() => this.props.handleClick('ラーメン', 700)}
                    />
                </div>
                <div className="food">
                    <img src={onigiri}
                        onClick={() => this.props.handleClick('おにぎり', 200)}
                    />
                </div>
                <div className="food">
                    <img src={burger}
                        onClick={() => this.props.handleClick('ハンバーガー', 300)}
                    />
                </div>
                <div className="food">
                    <img src={pan}
                        onClick={() => this.props.handleClick('パン', 200)}
                    />
                </div>
                <div className="food">
                    <img src={milk}
                        onClick={() => this.props.handleClick('牛乳', 200)}
                    />
                </div>
                <div className="food">
                    <img src={lunch}
                        onClick={() => this.props.handleClick('社食のランチ', 700)}
                    />
                </div>
                <div className="food">
                    <img src={curry}
                        onClick={() => this.props.handleClick('カレー', 700)}
                    />
                </div>
                <div className="food">
                    <img src={don}
                        onClick={() => this.props.handleClick('吉野家の牛丼', 500)}
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
       handleClick: (food, calory) => { dispatch(addCalorie(food,calory)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foods);