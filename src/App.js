import React, {Component} from "react";
import {connect} from 'react-redux'
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
  render(){
    console.log(this.props.tracks);
    return(
      <div>
        <div>
<input type="text" ref={(input)=> {this.trackInput=input}}/>
<button onClick={this.addTrack.bind(this)}>Add To Do</button>
<button onClick={this.deleteTrack.bind(this)}>DELETE TRACK</button>
<ul className="list">
  {this.props.tracks.map((track,index)=>
  <li key={index}>{track.name}</li>
  )}
</ul>
</div>
<div>
<input type="text" ref={(input)=> {this.serchINPUT=input}}/>
<button onClick={this.findTrack.bind(this)}>Find To Do</button>
<ul className="list">
  {this.props.tracks.map((track,index)=>
  <li key={index}>{track.name}</li>
  )}
</ul>
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
    }
  }
  
   
  )
)(App);

