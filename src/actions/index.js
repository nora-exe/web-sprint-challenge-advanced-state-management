import axios from 'axios';

//* Done ✔ Add in the action creators and action constants needed to add a smurf to state and fetch smurfs from the server.

//* Done ✔ Task List:

//* 💡 action types
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";


//* 💡 action creators
//* ✔ 1. Thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => dispatch => {
    //* 💡 async actions:
    dispatch({ type:FETCH_START })

    //* 💡 fetch data
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        // console.log(res.data);
        dispatch({ type:FETCH_SUCCESS, payload:res.data })
    })
        .catch(err => {
            dispatch({ type:ADD_ERROR, payload:err });
    });
};

//* ✔ 2. Add a standard action that allows us to add (post) new smurf (including the name, nickname, position below in Task 3)
export const addSmurf = (smurf) => dispatch => {
    dispatch({ type:FETCH_START })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type:ADD_SMURF, payload:smurf })
        })
        .catch(err => {
            dispatch({ type:ADD_ERROR, payload:err.response.data.Error })
        })
    
//* ✔ 3. Add a standard action that allows us to set the value of the error message slice of state, requiring name, nickname, position from Task 2
    if ( smurf.name === '' || smurf.nickname === '' || smurf.position === '' || smurf.summary === '' ) {
        dispatch({ type:ADD_ERROR, payload: Error })
        return
    }
}

// Error = "Name, position and nickname fields" are required from handlers.js