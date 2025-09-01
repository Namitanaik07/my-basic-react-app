import "./App.css"
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

import MsgBox from "./MsgBox.jsx";
//import title component here

function Subtitle(){
  return <h2>I'm the subtitle</h2>;
}

function App() {
  
  return (<> 
  <MsgBox userName="Vin" textColor="red"/>
  <MsgBox userName="nami" textColor="black"/>
  <ProductTab/>
  </>
   
  // <div><h1>My React App</h1>
  // <p>This is a paragraph</p>
  
  // <Subtitle/></div>
  
  );

}
export default App;
