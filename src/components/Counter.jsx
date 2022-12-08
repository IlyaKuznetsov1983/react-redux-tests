import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../actions/action';

const Counter = (props) => {
    return (
        <div className="card">
            <h2 id="counter">{props.counter}</h2>
            <button
                onClick={props.dec}
                className="btn btn-primary">DEC
            </button>
            <button
                onClick={props.inc}
                className="btn btn-primary">INC
            </button>
            <button
                onClick={props.rnd}
                className="btn btn-primary">RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    return {
        dec,
        inc,
        rnd: () => {
            const payload = Math.floor(Math.random() * 11)
            rnd(payload)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);