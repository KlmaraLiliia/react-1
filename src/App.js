
import './App.css';
import {useState} from 'react';
import Users1 from "./component/users/Users1";

/*
let animalsList=[
        { name: 'Vasya', type: 'Cat', age: 4},
        { name: 'Murka', type: 'Cat', age: 1.5 },
        { name: 'Varna', type: 'Turtle', age: 21 },
        { name: 'Kesha', type: 'Parrot', age: 3 },
        { name: 'Nayda', type: 'Dog', age: 2.5 },
        { name: 'Pufic', type: 'Humster', age: 2.5 },
        { name: 'Randy', type: 'dog', age: 12 },
    ];
*/
function App() {

let [counter, setCounter]=useState(0);
const increment =()=>setCounter(++counter);

const decrement =()=>setCounter(--counter);

const reset =()=>setCounter(0);


  return (
   <div>
       <div>
         counter is -${counter}
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button> 
       </div>
       <div>
           <Users1/>
       </div>

   </div>
  );
}

export default App;
