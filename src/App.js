import logo from './logo.svg';
import './App.css';
import CharacterComponent from "./components/characterComponent";

function App() {
  return (
   <div>
     <CharacterComponent
         name={'Imagine Dragons'}
         image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMX1QUN6yZ4YTXbKAOg45cN1jBuPREOnRHwYnZYbT9onUlg6oxrCCSW8TXwvkEea9z5Y&usqp=CAU'}
         age={'234'}/>
       <CharacterComponent
           name={'Dan Reynolds'}
           image={'https://endlesstrax.com/content/images/2020/04/dan-reynolds.jpg'}
           age={'236'}/>
       <CharacterComponent
           name={'Wayne Sermon'}
           image={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Positivus_2013_Imagine_Dragons_%289823061336%29.jpg/1200px-Positivus_2013_Imagine_Dragons_%289823061336%29.jpg'}
           age={'237'}/>

   </div>
  );
}

export default App;
