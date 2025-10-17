import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";



const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});


export default counterStore;

// / const counterReducer = (store = INITIAL_VALUE, action) => {

//   if (action.type == "Increment") {
//     return {...store ,counter: store.counter + 1 };
//   } else if (action.type == "Decrement") {
//     return { ...store ,counter: store.counter - 1 };
//   }else if(action.type=="Add"){
//     return {...store ,counter:store.counter + Number (action.payload.num)}
//   }else if(action.type=="Subtract"){
//     return {...store ,counter:store.counter - Number(action.payload.num)}
//   }else if(action.type == "Privacy_toggle"){
//     return {...store ,privacy:!store.privacy}
//   }

//   return store;
// };
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy:false
// };
