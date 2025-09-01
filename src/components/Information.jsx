import React, { Component } from 'react';
import { connect } from 'react-redux';

class Information extends Component {
    render() {
        const { winner, status, currentPlayer, restartGame } = this.props;

        let message;
        if (status === 'win') message = `Победил: ${winner}`;
        else if (status === 'draw') message = 'Ничья!';
        else message = `Ходит: ${currentPlayer}`;

        return (
            <div className="text-center mb-4">
                <div className="mb-2 text-xl">{message}</div>
                <button
                    className="px-6 py-2 bg-gray-800 text-white rounded-md cursor-pointer hover:bg-gray-700"
                    onClick={restartGame}
                >
                    Перезапустить
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    winner: state.winner,
    status: state.status,
    currentPlayer: state.currentPlayer,
});

const mapDispatchToProps = dispatch => ({
    restartGame: () => dispatch({ type: 'RESTART_GAME' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);
