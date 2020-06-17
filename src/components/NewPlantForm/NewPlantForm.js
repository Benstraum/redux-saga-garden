import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            name: '',
            kingdom:'',
            clade:'',
            order:'',
            family:'',
            subfamily:'',
            genus:''
        }
    }
    

    handleNameChange = (event, type) => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [type]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
        this.props.dispatch({type:'GET_GARDEN'})
        this.setState({
            newPlant: {
                name: '',
                kingdom:'',
                clade:'',
                order:'',
                family:'',
                subfamily:'',
                genus:''
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                
                <form onSubmit={this.addNewPlant}>
                    <input required type='text'placeholder='name' value={this.state.newPlant.name} onChange={(event) =>this.handleNameChange(event, 'name')} />
                    <input required type='text' placeholder='kingdom' value={this.state.newPlant.kingdom} onChange={(event) =>this.handleNameChange(event, 'kingdom')} />
                    <input required type='text' placeholder='clade' value={this.state.newPlant.clade} onChange={(event) =>this.handleNameChange(event, 'clade')} />
                    <input required type='text'placeholder='order' value={this.state.newPlant.order} onChange={(event) =>this.handleNameChange(event, 'order')} />
                    <input required type='text' placeholder='family' value={this.state.newPlant.family} onChange={(event) =>this.handleNameChange(event, 'family')} />
                    <input required type='text' placeholder='subfamily' value={this.state.newPlant.subfamily} onChange={(event) =>this.handleNameChange(event, 'subfamily')} />
                    <input required type='text' placeholder='genus' value={this.state.newPlant.genus} onChange={(event) =>this.handleNameChange(event, 'genus')} />
                    
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
