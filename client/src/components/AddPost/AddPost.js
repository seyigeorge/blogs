import React, { Component } from "react";
import axios from "axios";
import "./AddPost.css";

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            post: ""            
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { title, author, post } = this.state;
        axios.post("http://localhost:4000/api/v1/post/add", { title, author, post})
         .then(res => {
            if (res.status === 200) {
                this.props.history.replace("/");
            }
        });
    };

    render() {
        const { title, author, post } = this.state;
        return (
            <div>
                <div className="container">
                  <h2> Create New Post </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control" placeholder="Enter Title" name="title" value={title} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="author">Author</label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="author" value={author} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="post">Post</label>
                            <textarea className="form-control" placeholder="Enter Post" name="post" value={post} onChange={this.handleChange}></textarea>
                        </div>
                        <button className="form-control btn-primary" type="submit" onClick={this.handleSubmit}>Submit</button>    
                    </form>
                </div>
            </div>
        
        );
    }
}

export default AddPost;