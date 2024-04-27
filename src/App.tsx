//import ListGroup from './components/ListGroup';
// import Practice from './components/PracticeComponents';
//import Alert from './components/alert';
import Button from './components/button';

/*function App(){
  let list1 = ['binay1','binay2','binay3','binay4','binay5'];
  let cities = ['kolkata','jaipur','patna','arrah','ratanpura'];

  function handleSelectedItem(item: string){
    console.log(item);
  }

  return (<div> <ListGroup list={cities} heading='Cities' onSelectItem={handleSelectedItem}/><ListGroup list={list1} heading='List' onSelectItem={handleSelectedItem}/></div>);
}

const App = ()=>{
  return <>
  <Alert>
    Hello <span><h1>World!</h1></span>
    </Alert>
    </>
};*/

function handleButtonClick(){
  console.log("Button click handled");
}

const App = ()=>{
  return (<><Button button={'Binay'} onClick={handleButtonClick}/></>);
};

export default App;