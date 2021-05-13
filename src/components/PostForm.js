import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
          id: new Date(),
          title,
          message,
          editing: false
        }
        console.log(data);
        
        this.props.dispatch({
            type:'ADD_POST',
            data});
          this.getTitle.value = '';
          this.getMessage.value = '';
        }
render() {
return (
<div>
  <h1 className="p-2 text-4xl text-center text-white bg-gray-500">Create Post</h1>
  <div className="flex items-center justify-center px-16 py-5 bg-gray-200"> 
    <form onSubmit={this.handleSubmit}>
    <input type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title" className="p-2 text-xl font-semibold border-2 border-blue-900 rounded-md"/><br/><br/>
    <textarea required rows="5" cols="28" ref={(input)=>this.getMessage = input}
    placeholder="Enter Post" className="w-full p-2 text-base font-light border-2 border-blue-900 rounded-md"/><br /><br />
    <div className="flex items-center justify-center">
        <button type="submit" className="w-20 h-12 text-white bg-blue-500 rounded-md">Post</button>
    </div>
    
    </form>
  </div>
</div>
);
}
}
export default connect()(PostForm);