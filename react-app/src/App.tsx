// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [ alertVisible, setAlertVisibility ] = useState(false); 

  return (
    <>
      <div>
        { alertVisible && <Alert onClose={ ()=> setAlertVisibility(false) }>Hello <b>Text</b></Alert>}
      </div>
      <button>
        <Button color="primary" onClick={ ()=>setAlertVisibility(true)}>Click Here</Button>
      </button>
    </>
  )

  // return (
  //   <div>
  //     <Alert>Hello <b>Text</b></Alert>
  //   </div>
  // );

  // let items = ["Rio", "Tokyo", "Berlin", "Nairobi", "Denver"];
  // const handleSelectedItem = ( item: string ) => {
  //   console.log(item);
  // }
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}></ListGroup></div>;
}

export default App;
