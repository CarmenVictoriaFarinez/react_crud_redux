import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';



class App extends Component {
  render() {
    return (
    <div className="App">
        <div className="grid grid-cols-2 gap-5 p-5">
          <PostForm />
          <AllPost />
        </div>
    </div>
    );
    }
  }
export default App;
