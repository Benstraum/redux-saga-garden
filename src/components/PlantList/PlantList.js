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
    removeItem = (id) => {
        this.props.dispatch({ type: 'DELETE_PLANT', payload: id })
        this.props.dispatch({ type: 'GET_GARDEN' });
    }
    render() {
        return (
            <div>
                <h3>This is the plant list</h3>
                <ul>
                {this.props.reduxState.plantList.map(plant =><li key={plant.id}>name:{plant.name} kingdom:{plant.kingdom} clade:{plant.clade}
                order:{plant.kingdom} family:{plant.family} subfamily:{plant.subfamily}genus:{plant.genus} <button onClick={() =>this.removeItem(plant.id)}>delete</button>
                </li>)}
            </ul>
                <pre>{console.log(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
