import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
    handleCellClick = idx => {
        const { status, makeMove } = this.props;
        if (status !== 'process') return;
        makeMove(idx);
    };

    render() {
        const { field, status } = this.props;

        return (
            <div className="grid grid-cols-3 gap-2 w-48">
                {field.map((cell, idx) => (
                    <button
                        key={idx}
                        className="w-14 h-14 bg-gray-800 text-white text-2xl flex items-center justify-center rounded-md cursor-pointer disabled:cursor-default disabled:opacity-50 hover:bg-gray-700"
                        onClick={() => this.handleCellClick(idx)}
                        disabled={!!cell || status !== 'process'}
                    >
                        {cell}
                    </button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    field: state.field,
    status: state.status,
});

const mapDispatchToProps = dispatch => ({
    makeMove: index => dispatch({ type: 'SET_FIELD', payload: { index } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
