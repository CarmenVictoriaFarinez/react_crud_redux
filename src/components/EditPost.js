import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPost extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div className="px-16 py-5 bg-gray-200">
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button className="w-20 h-12 p-2 bg-green-400 rounded-xl">Update</button>
  </form>
</div>
);
}
}
export default connect()(EditPost);