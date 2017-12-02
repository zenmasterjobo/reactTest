import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'react-fetch';
import Keydown from 'react-keydown';
import './index.css';


export default class App extends React.Component{
  render(){
    return (
      <Fetch url="http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json">
        <Games/>
      </Fetch>
    )
  }
}


class GameObject extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
      </div>
    )
  }
}

class Games extends React.Component{
  render(){
    var gameJSON = this.props.data.games;
    console.log(gameJSON);
       // <GameObject/> 
    return <div/>
  }
}


//========================================
ReactDOM.render(
  <App />, document.getElementById('root')
);


function move(){}


