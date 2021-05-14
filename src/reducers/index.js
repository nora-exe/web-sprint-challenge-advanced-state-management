import { FETCH_START, FETCH_SUCCESS, ADD_SMURF, ADD_ERROR } from "../actions";

//* ✔ Task List:
//* ✔ 1. Adds the following state values into the initialState:
//  ✔ an array of smurfs
//  ✔ a boolean indicating if the app is loading
//  ✔ a string indicating a possible error message
export const initialState = {
    smurfsData: [{
        name:'Papa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
      },
      {
        id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
        name:'Smurfette',
        position:'Beautician',
        nickname: 'Smurfette',
        description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
      }],
    isLoading: false,
    error: ''
}


//* ✔ 2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfsData: action.payload,             
            }
        case ADD_SMURF:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfsData: [
                    ...state.smurfsData,
                    {
                        id: state.smurfsData.length,
                        ...action.payload
                    }
                ],
            };
        case ADD_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;


//* ✔ 3. Add in a reducer case to accommodate the start of a smurf fetch.
//! ❌ 4.  Add in a reducer case to accommodate the successful smurf api fetch. - This isn't necessary, the only error you encounter is with adding a Smurf
//* ✔ 5. Add in a reducer cases to accommodate the failed smurf api fetch.
//* ✔ 6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//* ✔ 7. Add in a reducer case that adds in a value to the error message.