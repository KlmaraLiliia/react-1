
import './App.css';
import Animal from "./component/animal/Animal";
import {useState} from 'react';


let animalsList=[
        { name: 'Vasya', type: 'Cat', age: 4},
        { name: 'Murka', type: 'Cat', age: 1.5 },
        { name: 'Varna', type: 'Turtle', age: 21 },
        { name: 'Kesha', type: 'Parrot', age: 3 },
        { name: 'Nayda', type: 'Dog', age: 2.5 },
        { name: 'Pufic', type: 'Humster', age: 2.5 },
        { name: 'Randy', type: 'dog', age: 12 },
    ];

function App() {

let [counter, setCounter]=useState(0);
const increment =()=>setCounter(++counter);

const decrement =()=>setCounter(--counter);

const reset =()=>setCounter(0);



let [animals, setAnimals]=useState(animalsList);

const deleteAnimal=()=>{
    animals.pop();
    setAnimals([...animals]);
    console.log('jhbh');
}

  return (
   <div>
       <div>
         counter is -${counter}
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button> 
       </div>
       
       <div>
       {
           animals.map((value,index) =>
               <Animal key={index}
                       {...value}
               />)
       }
       <button onClick={deleteAnimal}>delete animal</button>
       </div>

   </div>
  );
}

export default App;
