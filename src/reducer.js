const initialState = {
    field: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    status: 'process',
};

function calculateWinner(field) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (field[a] && field[a] === field[b] && field[a] === field[c]) {
            return field[a];
        }
    }
    return null;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FIELD': {
            const { index } = action.payload;
            if (state.field[index] || state.winner) return state;
            const newField = state.field.slice();
            newField[index] = state.currentPlayer;
            const winner = calculateWinner(newField);

            let status = 'process';
            if (winner) status = 'win';
            else if (!newField.includes(null)) status = 'draw';

            return {
                ...state,
                field: newField,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                status,
            };
        }
        case 'RESTART_GAME':
            return initialState;
        default:
            return state;
    }
}

export { initialState };
