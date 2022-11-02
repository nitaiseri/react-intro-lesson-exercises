import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "Hello";
  }

  getMorningGreeting() {
    return "Good morning";
  }

  getEveningGreeting() {
    return "Good evening";
  }

  showCompany(name, revenue) {
    return <div id={name}>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    let text;
    if (temperature < 15){
      text = "freezing";
    }else if (15 <= temperature && temperature <= 30){
      text = "fair";
    }else{
      text = "hell-scape";
    }
    return <div id="weatherBox" class={text}></div>
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12? this.getMorningGreeting(): this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
              {[this.getMorningGreeting(), this.getEveningGreeting(), <p>Some Text</p>]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(company => this.showCompany(company.name, company.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(150)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
