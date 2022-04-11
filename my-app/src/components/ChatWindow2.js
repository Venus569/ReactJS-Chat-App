import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup' ;
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'
import api from '../util/api';
import { useState } from 'react';
import axios from 'axios';
import { current } from '@reduxjs/toolkit';

/*
const getMessages=async()=>{
  const res = await api.get('/viewchat', {user});
}

const postMessages=async()=>{
  const res=await api.post('/viewchat',{});
}*/

const baseURL="http://localhost:3000/api/viewchat?user=zonkbrain";

const callfet=()=>{
  axios.get("http://localhost:3000/api/viewchat?user=baba")
  .then(function (response) {
    // handle success
    //console.log(response.data);
    //console.log(response.data.textArray);
    console.log("call fet function");
    
    console.log("settesdfsd",response.data.array[1]);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

const sendMessage=(currentMessage)=>{
  console.log(currentMessage)
  var a=currentMessage
  console.log("message sending......",a);
  axios.post(`http://localhost:3000/api/viewchat?user=baba&text=${currentMessage}&direction=received`)
  .then(function (response) {
    // handle success
    console.log(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

  

export const ChatWindow2 = () => {

  const [current,setCurrent]=useState('');
  let textarr2=[];
  let textarr=["ok","tata","bye-bye"];
  const[stronk,setStronk]=useState([]);


  /*const myTimeout = setTimeout(()=>{
    setStronk(stronk=>[...stronk,"hello"])
  }, 5000);*/

  useEffect(()=>{
    axios.get("http://localhost:3000/api/viewchat?user=baba")
  .then(function (response) {
    // handle success
    //console.log(response.data);
    //console.log(response.data.textArray);
    console.log("we are in useeffect now");
    
    console.log("settesdfsd",response.data.array[1]);
    (response.data.array).forEach(element => {
      setStronk(stronk=>[...stronk,element]);
      console.log(element.text)
    });
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[]);  //only on mount

  for(var key in obj)
  {
    (obj.firstname==val)
    
  }





 //textarr =>[...textarr,c]
 // const [c,setc]=useState(1);

  
  //console.log("value of c",c);

  

  /*const callfet=()=>{
  fetch({baseURL})
  .then(response => response.json())
  .then(data => console.log(data));
  }*/



  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" style={{textDecoration:"none"}}>
    <a class="navbar-brand" href="#">Back to home</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Debaditya
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
     
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      </div>
      </nav>
    </div>
    
    
    
    
    
    
    <div className='grid-container'>
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>


    <div className="chat-area" >
      <ul>
        <li className='received'>hi</li>
        <li className='received'>howdy</li>
        <li className='sent'>dude</li>
        <li className='received'>are you a</li>
        <li className='sent'>bounty hunter</li>
        <li className='sent'>bounty hunter</li>
        <li className='sent'>bounty hunter</li>
        <li className='sent'>bounty hunter</li>
        <li className='received'>howdy</li>
        <li className='received'>howdy</li>
        
         {stronk.map((element) => {
          return <li className={element.direction} >{element.text}</li>;
        })}
        
      </ul>

      </div>

      <div className='send-message'>
        <form onSubmit={e=>{
          e.preventDefault();
          console.log(current);
          //sendMessage(current);



         // console.log("message sending......",a);
          axios.post(`http://localhost:3000/api/viewchat?user=baba&text=${current}&direction=received`)
          .then(function (response) {
            // handle success
            // no need to parse
            console.log("response here its working");
            console.log(response.data);
                      

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })




          callfet();
          setCurrent('')
         
       
         
  }}
          
          >
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value={current} onChange={e=>setCurrent(e.target.value)}></input>
            <button type="submit" >send</button>
        </form>
      </div>
    </div>
    </>
  )
}
/*<input onCLick={send}>
</input>*/