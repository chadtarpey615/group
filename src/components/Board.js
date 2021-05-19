import React from 'react'
import classes from './Board.module.css'

const Board = () => {
    return (
      <div className={classes.chessboard}>
        <div>
          <div className={classes.white_square} id="KR8"></div>
          <div className={classes.black_square}id="KN8"></div>
          <div className={classes.white_square} id="KB8"></div>
          <div className={classes.black_square}id="K8"></div>
          <div className={classes.white_square} id="Q8"></div>
          <div className={classes.black_square}id="QB8"></div>
          <div className={classes.white_square} id="QN8"></div>
          <div className={classes.black_square}id="QR8"></div>
        </div>
        <div>
          <div className={classes.black_square}id="KR7"></div>
          <div className={classes.white_square} id="KN7"></div>
          <div className={classes.black_square}id="KB7"></div>
          <div className={classes.white_square} id="K7"></div>
          <div className={classes.black_square}id="Q7"></div>
          <div className={classes.white_square} id="QB7"></div>
          <div className={classes.black_square}id="QN7"></div>
          <div className={classes.white_square} id="QR7"></div>
        </div>
        <div>
          <div className={classes.white_square} id="KR6"></div>
          <div className={classes.black_square}id="KN6"></div>
          <div className={classes.white_square} id="KB6"></div>
          <div className={classes.black_square}id="K6"></div>
          <div className={classes.white_square} id="Q6"></div>
          <div className={classes.black_square}id="QB6"></div>
          <div className={classes.white_square} id="QN6"></div>
          <div className={classes.black_square}id="QR6"></div>
        </div>
        <div>
          <div className={classes.black_square}id="KR5"></div>
          <div className={classes.white_square} id="KN5"></div>
          <div className={classes.black_square}id="KB5"></div>
          <div className={classes.white_square} id="K5"></div>
          <div className={classes.black_square}id="Q5"></div>
          <div className={classes.white_square} id="QB5"></div>
          <div className={classes.black_square}id="QN5"></div>
          <div className={classes.white_square} id="QR5"></div>
        </div>
        <div>
          <div className={classes.white_square} id="KR4"></div>
          <div className={classes.black_square}id="KN4"></div>
          <div className={classes.white_square} id="KB4"></div>
          <div className={classes.black_square}id="K4"></div>
          <div className={classes.white_square} id="Q4"></div>
          <div className={classes.black_square}id="QB4"></div>
          <div className={classes.white_square} id="QN4"></div>
          <div className={classes.black_square}id="QR4"></div>
        </div>
        <div>
          <div className={classes.black_square}id="KR3"></div>
          <div className={classes.white_square} id="KN3"></div>
          <div className={classes.black_square}id="KB3"></div>
          <div className={classes.white_square} id="K3"></div>
          <div className={classes.black_square}id="Q3"></div>
          <div className={classes.white_square} id="QB3"></div>
          <div className={classes.black_square}id="QN3"></div>
          <div className={classes.white_square} id="QR3"></div>
        </div>
        <div>
          <div className={classes.white_square} id="KR2"></div>
          <div className={classes.black_square}id="KN2"></div>
          <div className={classes.white_square} id="KB2"></div>
          <div className={classes.black_square}id="K2"></div>
          <div className={classes.white_square} id="Q2"></div>
          <div className={classes.black_square}id="QB2"></div>
          <div className={classes.white_square} id="QN2"></div>
          <div className={classes.black_square}id="QR2"></div>
        </div>
        <div>
          <div className={classes.black_square}id="KR1"></div>
          <div className={classes.white_square} id="KN1"></div>
          <div className={classes.black_square}id="KB1"></div>
          <div className={classes.white_square} id="K1"></div>
          <div className={classes.black_square}id="Q1"></div>
          <div className={classes.white_square} id="QB1"></div>
          <div className={classes.black_square}id="QN1"></div>
          <div className={classes.white_square} id="QR1"></div>
        </div>
      </div>
    );
}

export default Board;

