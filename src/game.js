import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Board from './board';
import calculateWinner from './calculateWinner'

import { updateHistory } from './gameSlice'
import { updateXIsNext } from './gameSlice'
import { updateStepNumber} from './gameSlice'

export function Game () {
     
    const HandleClick = (i) => {
        const stepNumber = useSelector (state => state.stepNumber);
        const history = useSelector (state => state.history.slice(0, stepNumber + 1))
        const xIsNext = useSelector(state => state.xIsNext)
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        squares[i] = xIsNext ? 'X' : 'O';
        useDispatch(updateHistory({squares:squares}))
        useDispatch(updateStepNumber(history.length))
        useDispatch(updateXIsNext(history.length))
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
      };
  
    const JumpTo = (step) => {
      useDispatch(updateStepNumber(step))
      useDispatch(updateXIsNext(step))
    };
     
      
  
    console.log('hi')   
    const history = useSelector(state => state.history)
    console.log(history)
    const stepNumber = useSelector(state => state.stepNumber)
    const xIsNext = useSelector(state => state.xIsNext)
    const current = history[stepNumber]
    
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
          <li key={move}>
              <button onClick={() => JumpTo(move)}>{desc}</button>
          </li>
      );
    });
        
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => HandleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

export default Game;

