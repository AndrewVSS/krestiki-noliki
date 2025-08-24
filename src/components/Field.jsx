import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Field.css';

function Field() {
    const { field, status } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleCellClick = idx => {
        if (status !== 'process') return;
        dispatch({ type: 'SET_FIELD', payload: { index: idx } });
    };

    return (
        <div className="field">
            {field.map((cell, idx) => (
                <button
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    disabled={!!cell || status !== 'process'}
                >
                    {cell}
                </button>
            ))}
        </div>
    );
}

export default Field;
