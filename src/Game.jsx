import Information from './components/Information.jsx';
import Field from './components/Field.jsx';
import React from 'react';

function Game() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <Information />
            <Field />
        </div>
    );
}
export default Game;
