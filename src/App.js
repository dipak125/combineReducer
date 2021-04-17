
import React from "react";
import {doIncrement,doDecrement,change} from "./redux";
import {useSelector,useDispatch} from "react-redux";

 const App=()=>{
  const state=useSelector(state=>state);
  const counter=state.counter.counter;
  const todo=state.todos;
  const dispatch=useDispatch();
   return(
     <>
      <h1>counter: {counter}</h1>
      <button onClick={()=> dispatch(doIncrement(1))}>click to increment</button>
      <button onClick={()=> dispatch(doDecrement(1))}>click to decrement</button>
      <h1>id={todo.id}</h1>
      <h1>name={todo.name}</h1>
      <h1>age={todo.age}</h1>
      <button onClick={()=> dispatch(change("dipak kumar gope"))}>click to update</button>
     </>
   )
}
export default App;