import { INCREMENT } from "../actions/types";
var count;
const initialState = {

    count:0
  };
  
  function counter(state=initialState, action) {
    const { type} = action;
    console.log("bruh");
    switch (type) {
      case INCREMENT:
        return {
          ...state,
          count:2
        };
      
      default:
        return state;
    }
  }
  
  export default counter;
  