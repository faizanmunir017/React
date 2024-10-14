import { useState } from 'react';
import './App.css';
import {shoot} from './List.ts';

// Props definition
// interface GreetingProps {
//   name: string;
// }

// Functional component using props
// function Greeting ({ name}:GreetingProps) {
//   const [message, setMessage] = useState<string>('Hello');

//   return (
//     <div>
//       <p>{message}, {name}!</p> {/* Using both state and props */}
//       <button onClick={() => setMessage('Hey')}>Change Message</button>
//     </div>
//   );
// }


// Checking how many times a button has been clicked



function App() {

  const handleInput=(event:React.ChangeEvent<HTMLInputElement>, arg1:string)=>

  {
    setValue(event.target.value);  
    console.log(arg1);  
  }

  const [count, setCount]= useState(0);
  const [value,setValue]=useState(" ");
  const [showText, setShowText] = useState(false); // State to control text visibility

  function clickCount(){

    setCount(count+1);
  }

  function handleEnter()
  {
    setShowText(true);
  
  }

  return (
    <div>
      <p>Button clicked {count} times</p>
     <button onClick={clickCount}>Increase</button>
     <button onClick={()=>shoot("Faizan Scored a goal")}>Shoot</button>
     <input type="text" onChange={(event)=>handleInput(event,"Munir")} value={value}></input>
     <button onClick={(handleEnter)}>Enter</button>
     {showText && <p>{value}</p>}
    </div>
  );
}

export default App;
