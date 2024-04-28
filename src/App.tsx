import ListGroup from './components/ListGroup';
import './App.css';
// import Practice from './components/PracticeComponents';
// import Alert from './components/alert';
// import { useState } from 'react';
// import Button from './components/Button';

function App(){
  let list1 = ['binay1','binay2','binay3','binay4','binay5'];
  let cities = ['kolkata','jaipur','patna','arrah','ratanpura'];

  function handleSelectedItem(item: string){
    console.log(item);
  }

  return (<div> <ListGroup list={cities} heading='Cities' onSelectItem={handleSelectedItem}/><ListGroup list={list1} heading='List' onSelectItem={handleSelectedItem}/></div>);
}

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
