import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({type:'GET_GARDEN'})
    }

    render() {
        return (
            <div>
                <h3>This is the plant list</h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
