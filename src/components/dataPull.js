import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'react-fetch';
import Keydown from 'react-keydown';
import './index.css';

const url = "http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
      //console.log(hits);
  }
  render() {
    const { hits } = this.state;

    return (
      <div>
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}


ReactDOM.render(
  <App />, document.getElementById('root')
);
//export default App;
/*export default class App extends React.Component{
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
    var gameJSON = this.props.data;
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

*/
