import React from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { Layout, Icon } from "antd";
const { Header } = Layout;

function App() {
  return (
    <div className="container" 
    style={{display:"flex", justifyContent:'center', marginTop:'10px' ,marginBottom: "10px" }}>
      <div className="row">
        <div className='col' style={{backgroundColor:"#110f38"}}>
        
      <Header style={{backgroundColor:"#d4c4fb",marginTop:'10px',paddingTop:'10px', borderRadius:'2em 1em 4em / 0.5em 3em'}}>
      <h2 style={{textShadow: '2px 2px 5px #f47373'}}><Icon type="bank" /> React-Redux Notes app</h2>
    
      </Header>
      <div>
        <NoteForm />
        </div>
      
      <hr />
      <div>
        <NotesList />
      </div>

    </div>
    </div>
    </div>
  );
}

export default App;
