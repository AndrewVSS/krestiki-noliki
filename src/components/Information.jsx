import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Information.css';

function Information() {
    const { winner, status, currentPlayer } = useSelector(state => state);
    const dispatch = useDispatch();

    let message = '';
    if (status === 'win') message = `Победил: ${winner}`;
    else if (status === 'draw') message = 'Ничья!';
    else message = `Ходит: ${currentPlayer}`;

    return (
        <>
            <div>{message}</div>
            <button onClick={() => dispatch({ type: 'RESTART_GAME' })}>Перезапустить игру</button>
        </>
    );
}

export default Information;
