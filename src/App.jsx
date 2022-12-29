import { useState } from 'react';
import './App.css';
import Stack from './stack';

let stack = new Stack();

 const App = () =>  {

  const [message, setMessage] = useState([]);
  const [inputNum, setinputNum] = useState(0);
  
  const changeHandler = (event) => {
    setinputNum(event.target.value);
  }

  const addToStack = (num) =>{
    stack.add(num);
    setMessage(`Inside the stack: ${stack.items}`);
  }

  const removeFromStack = () => {
    stack.remove();
    setMessage(`Inside the stack: ${stack.items}`);
  }

  const peekAtStack = () => {
    stack.peek();
    setMessage(`Peeking at the stack: ${stack.peek()}`);
  }

  const sizeOfStack = () => {
    stack.size();
    setMessage(`Size of the stack: ${stack.size()}`);
  }

  const clearStack = () => {
    stack.clear();
    setMessage(`The stack is Empty: ${stack.items}`);
  }

  const isStackEmpty = () => {
    console.log(stack.isEmpty());
    setMessage(`is stack is Empty: ${stack.isEmpty()}`);
  }

  const clickHandler = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case "add": addToStack(inputNum);       
        break;

      case "remove": removeFromStack();       
        break;

      case "peek": peekAtStack();       
        break;

      case "size": sizeOfStack();       
        break;

      case "clear": clearStack();       
        break;

      case "isEmpty": isStackEmpty();       
        break;

      default:
        break;
    } 
  }

  return (
    <div>          
        <div className='input'>
          <h1>Stack Algorithm</h1>
          <h3>Enter A number</h3>
          <input type="text" name="newNumber" onChange={changeHandler}></input>
        </div> 
        <div className='buttons'>
        <button onClick={clickHandler} id="add">add number to stack</button>
        <button onClick={clickHandler} id="remove">remove number from stack</button>
        <button onClick={clickHandler} id="peek">peek at last number of stack</button>
        <button onClick={clickHandler} id="isEmpty">check if stack is empty</button>
        <button onClick={clickHandler} id="size">check stack size</button>
        <button onClick={clickHandler} id="clear">Clear stack</button>
        </div>                          
        <h2>{message}</h2>         
      </div >
  );
}   

export default App;