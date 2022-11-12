import React, {useState, useEffect} from 'react';

import axios from "axios";

import {Button, Form, Container, Modal } from 'react-bootstrap'

import Post from './single-post.component';

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [refreshData, setRefreshData] = useState(false)

    const [changePost, setChangePost] = useState({"change": false, "id": 0})
    const [changeUsername, setChangeUsername] = useState({"change": false, "id": 0})
    //const [newUsernameName, setNewUsernameName] = useState("")

    const [addNewPost, setAddNewPost] = useState(false)
   // const [newPost, setNewPost] = useState({"description": "", "location": "", "price": 0.0, "title": "", "username": ""})

    //gets run at initial loadup
    useEffect(() => {
        getAllPosts();
    }, [])

    //refreshes the page
    if(refreshData){
        setRefreshData(false);
        getAllPosts();
    }
    
    return (
        <div>
            <Container>
                <Button onClick={() => setAddNewPost(true)}>Add new post</Button>
            </Container>

            <Container>
                {posts != null && posts.map((post, i) => (
                    <Post postData={post} deleteSinglePost={deleteSinglePost} setChangeUsername={setChangeUsername} setChangePost={setChangePost}/>
                ))}
            </Container>
        </div>
    );
    //gets all the orders
    function getAllPosts(){
        var url = "http://localhost:5000/posts"
        axios.get(url, {
            responseType: 'json'
        }).then(response => { 
            if(response.status == 200){
                setPosts(response.data)
            }
        })
    }

    //deletes a single order
    function deleteSinglePost(id){
        var url = "http://localhost:5000/post/delete/" + id
        axios.delete(url, {

        }).then(response => {
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }
}
export default Posts