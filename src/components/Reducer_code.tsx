

//useReducer Hook practiced here

import { useReducer } from "react";

// reducer function => state, action

//[state,dispatch]= useReducer[reducer,intialState]




type State = {
    count: number;
  };
  
  // Define the action type
type Action = { type: 'Increment' } | { type: 'Decrement' } | {type:'Reset'};

const reducer=(state:State,action:Action)=>{

    switch(action.type){
        case 'Increment':
            return {count:state.count+1};
        case 'Decrement':
            return {count:state.count-1};
        case 'Reset':
            return {count:state.count=0};
    }



}


function Reducer_code() {

    const initialState= {count:0};
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
        <h1>Using Reducers</h1>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </>
    );

   

};

export default Reducer_code;