import Login from './components/Login.js';
import React, { Fragment, useState } from 'react';
import { Link,BrowserRouter,Routes, Route, useParams } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store.js';
import {RouteCompo} from './components/RouteCompo'
import { ErrorAlert } from './components/ErrorAlert';
import { ChatWindow } from './components/ChatWindow';
import {Form} from './components/Form'
import PrivateRoutes from './components/privateRoutes.js';

/*
implement messaging in strings
check if text isnt of undefined on both sides
then  jwt
first from chatwindow...async call then from react
last message array
*/
function App() {
  const [isAuthenticated,setAuth]=useState(true);
 

return (
  <>
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path='/ChatWindow' element={<ChatWindow/>} />  
    <Route
          path="/form"
          element={<PrivateRoutes>
              <Form />
    
         </PrivateRoutes>}
         />
  </Routes>
</BrowserRouter>
</Provider>
</>



)


};
/*
 <Router>
 <Suspense fallback={<Loader />}>
   <Switch>
      <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
          > <LoginPage />
      </PublicRoute>

      <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
        

        <Route exact path='/form' element={<Form/>} /> 

        */

export default App;
