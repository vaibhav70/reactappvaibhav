import React, {useReducer} from 'react';
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    } 
    else if(action.type === "DECR") {
        if(state > 0) {
            state = state - 1;
        }
    }
    return state;
};

const UseReducer = () => {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
        <div className='center-div'>
            <p>{state}</p>
            <div className="button2" onClick={() => {dispatch({type:"INCR"})}}>
                <span></span>
                <span></span> 
                <span></span>
                <span></span>
                Increase
            </div>
            <div className="button2" onClick={() => {dispatch({type:"DECR"})}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrease
            </div>

        </div>
    </>
  )
}

export default UseReducer