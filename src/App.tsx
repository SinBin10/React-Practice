// import ListGroup from './components/ListGroup';
// import './App.css';
// import Practice from './components/PracticeComponents';
// import Alert from './components/alert';
// import Like from './components/Like';
// import Message_Purity from "./Message_Purity";
import { useState } from "react";

const App = () => {
  const [Drink, setDrink] = useState({
    title: 'CocaCola',
    price: 5
  })
  //learning how to change multiple things when 
  //using usestate hook
  const handleClick = ()=>{
    const newDrink = {
      // title: Drink.title,
      // price: 6
      //or
      ...Drink,
      price: 6
    }
    setDrink(newDrink);
  }

  return (
    <div>
      {Drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}



/*const App = () => {
  return (
  <div>
    <Like onClick={()=>console.log('clicked')}/>
  </div>);
};*/

// function App(){
//   let list1 = ['binay1','binay2','binay3','binay4','binay5'];
//   let cities = ['kolkata','jaipur','patna','arrah','ratanpura'];

//   function handleSelectedItem(item: string){
//     console.log(item);
//   }

//   return (<div> <ListGroup list={cities} heading='Cities' onSelectItem={handleSelectedItem}/><ListGroup list={list1} heading='List' onSelectItem={handleSelectedItem}/></div>);
// }

/*const App = ()=>{
  return <>
  <Alert>
    Hello <span><h1>World!</h1></span>
    </Alert>
    </>
};*/

/*const App = () => {
  const [state,setState] = useState(false);
  return (
    <>
      {state && <Alert onClick={()=>{setState(false)}}>My alert</Alert>}
      <Button color="secondary" onClick={()=>{setState(true)}}>
        Hello
      </Button>
    </>
  );
};*/

export default App;
