
import "./App.css";
import { useState } from "react";



function App() {

  const[toDos,setToDos]=useState([]);

  const [toDo,setToDo]=useState("");





  return (
   <div>
     <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)} } type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>{setToDos([...toDos,{id:Date.now() , text:toDo ,status:false }] ) }}></i>
      </div>
      <div className="todos">
        { toDos.map((value,index)=>{
          return (
          <div className="todo">
          <div className="left">
            <input type="checkbox"  onChange={(e)=>{
              
              setToDos(toDos.filter(object=>{
           
                if(object.id===value.id){
                  object.status=e.target.checked
                
                }
                return object
              }
              ))
            }} name="" id="" value={value.status}/>
            <p>{value.text}</p>
          </div>
          <div className="right">
          <i
                    className="fas fa-times"
                onClick={()=>{setToDos(toDos.filter((item)=>item.id!==value.id))}}
                  ></i>
          </div>
        </div>)
        
      })}
      {toDos.map((value)=>{
        if(value.status){
          return (<h1>{value.text}</h1>)
        }
        return null
      })}

  
      </div>
    </div>
   </div>
  );
}

export default App;
