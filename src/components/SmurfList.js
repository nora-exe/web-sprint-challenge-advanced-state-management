import React from 'react';
import { connect } from "react-redux";

import { fetchSmurfs } from '../actions';

import Smurf from './Smurf';

//* ✔ Task List:
//* ✔ Connect this component to redux, passing in your smurf array and loading status state values.

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }
    
    //* ✔ 1. Connect the smurfs and loading state values to the SmurfList component.
    render() {
        const { smurfs, isLoading } = this.props;
        
        //* ✔ 3. Replace the static isLoading variable with the state loading variable.
        if (isLoading) return <h1>Loading...</h1>
        
        //* ✔ 2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
        return (
            <div className="listContainer">
                {smurfs.map(smurf => {
                    return <Smurf smurf={smurf} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfsData,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
