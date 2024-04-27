//import ListGroup from './components/ListGroup';
// import Practice from './components/PracticeComponents';
//import Alert from './components/alert';

function App(){
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
};

export default App;