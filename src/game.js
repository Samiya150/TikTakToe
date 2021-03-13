import React from 'react';
import ReactDOM from 'react-dom';
import { confirmAlert } from 'react-confirm-alert';  // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
//import firebase from 'firebase';
//import fire from './firebaseConfig';
//import App from './App';
//import 'firebase/auth';
import './game.css';

 

function Title () {
   
  return (
    
      <section><nav>
          <h1>TICTAK</h1>
         //<button /* onClick={() => fire.auth().signOut()} */>Logout</button>
          </nav></section> 
    
  )
}

/* function LeaderBoard() {
   
       
     
        const squares = current.squares.slice();
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

         return(
             <section><h2>LeaderBoard</h2>
              <li>{winner}</li>
              </section>

         )
       
    
} */

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      //  onClick={() => this.forceUpdate}
      />

    
    );
    
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const num = 0;
    const count = num+ 1;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
   // const firebase = fire.initializeApp(firebaseConfig);
    const options = {
      title: 'Congrats!',
      message: 'The winner is '+ winner,
      buttons: [
        {
          label: 'Play Again',
          onClick: () => window.location.reload(true)
        },
        {
          label: 'Exit',
          onClick: () => onclose
          }]};
    

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
       
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
        
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
      confirmAlert(options);
      
     
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
     <div id='root'>
    
       <Title />
       <section><h2>LeaderBoard</h2>
       <li>{count + ':' + winner }</li></section>
      <div className="game">
        
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          </div>
        </div>
        </div>
     
    );
  }
}


// ========================================

ReactDOM.render(<Game/>, document.getElementById("root"));





function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;