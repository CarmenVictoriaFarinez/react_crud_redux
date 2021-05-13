import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div className="px-16 py-5 bg-gray-200">
      <h2 className="text-xl font-semibold">{this.props.post.title}</h2>
      <p className="text-base font-light">{this.props.post.message}</p>
      <div className="flex items-center justify-around">
        <button  onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})} className="w-20 h-12 p-2 bg-blue-400 rounded-xl">
            Edit</button>
        <button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})} className="w-20 h-12 p-2 bg-red-400 rounded-xl">
            Delete</button>
      </div>
     
    </div>
  );
 }
}
export default connect()(Post);



