import React from 'react';
import {Button} from 'react-bootstrap' ;
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/CounterSlice'
const obj=require('./default.json');
console.log(obj.jwtSecret);

const Login = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    
    <form>
    <div >
        <label for="email">email</label><br/>

    <input
            type="email"
            placeholder="Email Address"
            name="email"
            /*value={email}
            onChange={onChange}
            required*/
          />
    </div>
    <div>
        <label for="password">password</label><br/>

          <input
            type="password"
            placeholder="Password"
            name="password"
            /*value={password}
            onChange={onChange}
            minLength="6"*/
          />
        </div>
        <div>
         <Button type="submit">Submit</Button>
        </div>

        <div>
         <Button onClick={() => dispatch(increment())}>{count}</Button>
        </div>


    </form>
    </> 
  )
}

export default Login;
/*const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});*/



