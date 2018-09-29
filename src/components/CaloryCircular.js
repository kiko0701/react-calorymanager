import React, { Component } from 'react';
import CircularProgressbar from "react-circular-progressbar";
import '../App.css';

//一日の目標カロリーまでの進捗を表示する
const todayNow = (daily_target, current_cal) => {
  if (daily_target - current_cal > 0) {
    return '今日はあと、' + (daily_target - current_cal) + 'kcalです！';
  } else {

    return '今日の目標を達成しました！';
  }
}


export default class CaloryCircular extends Component {
  render() {
    return (
      <div>
        <div className="calory-circle-container">
          <CircularProgressbar
            percentage={this.props.current_cal / this.props.daily_target * 100}
            text={`${this.props.current_cal}kcal`}
           />
        </div>
        <div className="target_cal-container">
          <p>{todayNow(this.props.daily_target,this.props.current_cal)}</p>
        </div>
      </div>
    );
  }
}
