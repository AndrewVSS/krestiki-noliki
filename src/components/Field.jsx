import React, { useEffect, useState } from 'react';
import { store } from '../store.js';

function Field() {
    const [, setVersion] = useState(0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setVersion(v => v + 1));
        return unsubscribe;
    }, []);

    const { field, status } = store.getState();

    const handleCellClick = index => {
        if (status !== 'process') return;
        store.dispatch({ type: 'SET_FIELD', payload: { index } });
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 30,
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 50px)',
                    gap: 20,
                }}
            >
                {field.map((cell, idx) => (
                    <button
                        key={idx}
                        style={{
                            width: 50,
                            height: 50,
                            fontSize: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 6,
                        }}
                        onClick={() => handleCellClick(idx)}
                    >
                        {cell}
                    </button>
                ))}
            </div>
            <button
                onClick={() => store.dispatch({ type: 'RESTART_GAME' })}
                style={{
                    marginTop: 30,
                    padding: '10px 24px',
                    fontSize: 18,
                    borderRadius: 6,
                    cursor: 'pointer',
                    background: '#222',
                    color: '#fff',
                    border: 'none',
                }}
            >
                Перезапустить
            </button>
        </div>
    );
}

export default Field;
