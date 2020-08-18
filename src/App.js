import React, { useState, useEffect} from 'react';
import {Button ,FormControl,InputLabel,Input} from '@material-ui/core';

import Message from './Message.js';
import firebase from 'firebase';

import './App.css';
import db from './firebase.js';

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] =  useState('');

  //console.log(input);
  //console.log(messages);  

  useEffect(() => {

    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });

  }, [])


  useEffect(()=>{
    //run somecode here..
    //if its blank in side the [],then this code runs once when the app components loads
    setUsername(prompt('Please enter your name'));

  },[])//condition

  const sendMessage = (event) => {
    
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimeStamp()
      
    })
    
    setMessages([...messages, {username:username,text:input}]);
    setInput('');
    

  }
  return (
    
    <div className = "App">
      
      <h1>Hello Programmers!!!</h1>
      <h2> Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel >Enter a Message.....</InputLabel>
          <Input value={input} onChange = {event => setInput(event.target.value)} />
          <Button disabled={!input} variant ='contained' color ='primary' type='submit' onClick = {sendMessage}>Send Message</Button>
        </FormControl>
      
      
      </form>
      {
        messages.map(message => (
        <Message username = {message.username} message = {message}/>
        ))
      }
      
    </div>
    );
}

export default App;
