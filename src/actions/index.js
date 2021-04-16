import axios from 'axios';

//Task List:
// ✔ 1. Thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

//* 💡 action types
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

//* 💡 action creators
// ✔ 1. Thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
    return (dispatch) => {
        //* 💡 async actions:
        dispatch({ type: FETCH_SMURFS_START })
        
        //* 💡 fetch data
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_FAIL, payload: err });
            });
    };
};

//TODO 2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (formData) => {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF, payload: formData })
    }
    // dispatch({ type: ERROR_MESSAGE, payload: "error" })
}

//TODO 3. Add a standard action that allows us to set the value of the error message slice of state.
