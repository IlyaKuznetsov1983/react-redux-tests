import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="card">
            <h2 id="counter">{counter}</h2>
            <button
            onClick={dec}
                className="btn btn-primary">DEC</button>
            <button onClick={inc}
                    className="btn btn-primary">INC</button>
            <button onClick={rnd}
                    className="btn btn-primary">RND</button>
        </div>
    );
};

export default Counter;