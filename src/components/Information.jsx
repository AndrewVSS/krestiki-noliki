import React, { useEffect, useState } from 'react';
import { store } from '../store.js';

function Information() {
    const [, setVersion] = useState(0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setVersion(v => v + 1));
        return unsubscribe;
    }, []);

    const { currentPlayer, winner, status } = store.getState();

    let message = '';
    if (status === 'win') message = `Победил: ${winner}`;
    else if (status === 'draw') message = 'Ничья!';
    else message = `Ходит: ${currentPlayer}`;

    return (
        <>
            <div>{message}</div>
        </>
    );
}

export default Information;
