import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Login from './Login';
import { ChatWindow } from './ChatWindow';
import { ErrorAlert } from './ErrorAlert';
import { Form } from './Form'



export const RouteCompo = () => {
  return (
    <>
    <ErrorAlert/>
    <Routes>
    <Route exact path='/' element={<Login/>} />
    <Route exact path='/ChatWindow' element={<ChatWindow/>} />
    <Route exact path='/form' element={<Form/>} />
    </Routes>
    </>
  )
}
