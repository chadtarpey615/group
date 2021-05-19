import { useCheckers } from 'react-checkers';

const Checkers = () => {
    const { board, handleMove, handlePick, playerTurn, scoreboard, rules } = useCheckers();

    return (
        <div>
            <div>`Turn: ${playerTurn}`</div>
            <div>
                <div>Score:</div>
                <div>{`Player 1: ${scoreboard[1]} | Player 2: ${scoreboard[2]}`}</div>
            </div>
            <div>
                {Object.keys(board).map((row, j) => {
                    return (
                        <div key={j}>
                            {Object.keys(board[row]).map((positionIndex, k) => {
                                const square = board[row][positionIndex];
                                const isEvenPosition = (square.position.x + 1 * square.position.y) % 2 === 0

                                return (
                                    <div onClick={() => (!square.occupiedBy ? handleMove(square) : null)}>
                                        {square.occupiedBy !== null && isEvenPosition && (
                                            <div onClick={() => handlePick(square)}>
                                                {square.isKinged && 'K'}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div>
                <div>Rules:</div>
                <div>
                    {rules.map((rule, i) => (
                        <div key={i}>
                            {i + 1}. {rule}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Checkers;