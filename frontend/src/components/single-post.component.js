//import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Row, Col} from 'react-bootstrap'
const Post = ({postData, setChangeUsername, deleteSinglePost, setChangePost}) => {
    
    return (
        <Card>
            <Row>
                <Col>Title: { postData !== undefined && postData.title}</Col>
                <Col>Username: { postData !== undefined && postData.username}</Col>
                <Col>Location: { postData !== undefined && postData.location}</Col>
                <Col>Price: ${postData !== undefined && postData.price}</Col>
                <Col>Description: { postData !== undefined && postData.description}</Col>
                <Col><Button onClick={() => deleteSinglePost(postData._id)}>delete post</Button></Col>
                <Col><Button onClick={() => changeUsername()}>change username</Button></Col>
                <Col><Button onClick={() => changePost()}>change post</Button></Col>
            </Row>
        </Card>
    )

    function changeUsername(){
        setChangeUsername(
            {
                "change": true,
                "id": postData._id
            }
        )
    }
    function changePost(){
        setChangePost(
            {
                "change": true,
                "id": postData._id
            }
        )
    }

}
export default Post