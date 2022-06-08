import React, {Component} from "react";
import {connect} from 'react-redux'
//import * as pastState from './reducers/past-state';
class App extends Component{
  addTrack(){
    this.props.onAddTrack(this.trackInput.value);
    console.log("Add track", this.trackInput.value)
    this.trackInput.value='';
  }
  findTrack(){
    console.log("find track", this.serchINPUT.value)
    this.props.onFindTrack(this.serchINPUT.value)
  }
  deleteTrack(){
    console.log("delete track", this.trackInput.value)
    this.props.ondeleteTrack(this.trackInput.value)
  }
  //кнопка
  constructor(props) {
    super(props);

    this.state = {
        buttonColor: "white"
    };
}

pastState=(state = [], action)=> {
  switch (action.type) {
    case 'RESET_TYPE_ID':
      return {...state, type_id: null};
    default:
      return state;
  }
}



handleButtonClick = () => {
if(this.state.buttonColor==="white"){
  this.setState({
    buttonColor: "blue"
})
}
 else{
  this.setState({
    buttonColor: "white"
})
 }
}

  render(){
    //this.props.dispatch(pastState.resetTypeId());
    console.log(this.props.tracks);
    return(
      <div>
        <h1
        style={{color:'red',margin:'0px 0px 0px 550px', fontSize:'90px'}}
        > To Do List</h1>
        <div>
<input type="text" 
style={{height:"35px", width:'500px', margin:'20px 0px 0px 500px'}}
ref={(input)=> {this.trackInput=input}}
placeholder="To  do..."/>
<button 
style={{ border:'0', background:'green', color:'white',height:'25px', borderRadius:'10px'  }}
 onClick={this.addTrack.bind(this)}>Add To Do</button>
<button
style={{ border:'0', background:'red', color:'white',height:'25px', borderRadius:'10px'  }} 
onClick={this.deleteTrack.bind(this)}>DELETE TO DO</button>
<button onClick={this.props.dispatch(pastState.resetTypeId())}>Click</button>
<ul className="list"
style={{border:'2px solid rgb(241, 237, 237)', width:'700px', height:'700px', margin:'20px 0px 0px 400px', background:'rgb(241, 237, 237)'}}>
  {this.props.tracks.map((track,index)=>
  <ol
  style={{fontSize:'26px'}}
  key={index}>{track.name}
  <button id="Click" key={index}
   style={{background: this.state.buttonColor, width:'20px', height:'20px', marginLeft:'20px'}}
    onClick={this.handleButtonClick}>
      </button>
      </ol>
      
)}
</ul>
</div>
  <div className="Find" style={{margin:"-900px 0px 0px 1200px"}}>
<input type="text" ref={(input)=> {this.serchINPUT=input}}
placeholder="Find"
/>
<button onClick={this.findTrack.bind(this)} 
style={{ border:'0', background:'lightseagreen', color:'white',height:'25px', borderRadius:'10px'  }}
>Find To Do</button>
<ol className="list2">
  {this.props.tracks.map((track,index)=>
  <li key={index}>{track.name}</li>
  )}
</ol>
</div>
      </div>
    );
  }
}
export default connect(
  state =>({
    tracks: state.tracks.filter(track=>track.name.includes(state.filtertracks))
  }),
  dispatch =>({
    onAddTrack:(trackName)=>{
const payload ={
  id: Date.now().toString(),
  name: trackName
};

      dispatch({type:"ADD_TRACK", payload});
    },
    onFindTrack: (name)=>{
      dispatch({type:"FIND_TRACK", payload:name});
    },

     ondeleteTrack: (CaracterName)=>{
      dispatch({type:"DELETE_TRACK", payload: CaracterName})
    },
  }
  
   
  )
)(App);

