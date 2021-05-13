import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditPost from './EditPost'

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1 className="p-2 text-4xl text-center text-white bg-gray-500">All Posts</h1>
                {console.log(this.props.posts)}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditPost post={post} key={post.id} /> :
                        <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);