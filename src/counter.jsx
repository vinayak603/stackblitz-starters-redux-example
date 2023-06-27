import  React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action";

const Counter =(props)=>{
  const {count,increment,decrement,reset } = props;
  return (
    <div>
      <h1>Count  :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return {
    count : state.count
  }
}

export default connect (mapStateToProps, {increment,decrement,reset})(Counter);