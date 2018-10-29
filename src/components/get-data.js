
import React, { Component } from 'react'
import axios from 'axios'



class Characters extends Component {
    constructor () {
        super()
        this.state = {
            characters: [],
            forceSensitive: []
        }

        this.getData = this.getData.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    // figure out what .bind does so you can explain it

    }

    getData() {
        axios.get('https://swapi.co/api/people/').then( results => {
            this.setState({
                characters: results.data.results
            }
            )
        })
    }
    //Step 2 - function gets invoked and makes axios post request to backend with information of star wars character
    forceSensitive (character) {
        axios.post('/api/people/test', {character}).then( results => {
            //Step 5 - Use result to update force sensitive array on state
            this.setState({
                forceSensitive: results.data
            })
        })
    }

    sorted () {
        axios.get('/api/people/test').then( results => {
            this.setState({
                forceSensitive: results.data
            })
        })
    }

    deleteHandler(id) {
        axios.delete(`/api/people/${id}`).then( results => {
            this.setState({
                forceSensitive: results.data
            })
        })
    }
    

    // after things are done work the planents into the mix


    render () {
        console.log(this.state.forceSensitive)
        return (
            <div>
                <h1>Characters</h1>
                <button onClick={this.getData}>Get Character Data</button>
                {this.state.characters.map((character, index) => {
                    return (
                        <div key={ index }>
                            <h4>Name: { character.name }</h4>
                            <h5>Height: { character.height} cm</h5>
                            <h5>Hair Color: {character.hair_color}</h5>
                            <h5>Gender: {character.gender}</h5>
                            {/* <h3>Home Planet: {character.homeworld}</h3> */}
                            <h5>Eye Color: {character.eye_color}</h5>
                            <h5>Birth Year: {character.birth_year}</h5>
                            <h5>Mass: {character.mass} kg</h5>
                            {/* Step 1 - click button */}
                            <button onClick={ () => this.forceSensitive(character)}>Has Force Powers</button>
                        </div>
                    )
                })}
                <h1>Force Users</h1>
                {/* Make a component for each one of these */}
                {/* In each component, have some state that you can update. Then when ready have a function that passes the id and the updated value on post request  */}
                {this.state.forceSensitive.map((forceSensitive, index) => {
                    console.log('111', forceSensitive)
                    return (
                        <div key={ index }>
                            <h4>Name: {forceSensitive.name}</h4>
                            <h4>Height: {forceSensitive.height} cm</h4>
                            <h4>Hair Color: {forceSensitive.hair_color}</h4>
                            <h4>Gender: {forceSensitive.gender}</h4>
                            {/* <h4>Home Planet: {forceSensitive.homeworld}</h4> */}
                            <h4>Eye Color: {forceSensitive.eye_color}</h4>
                            <h4>Birth Year: {forceSensitive.birth_year}</h4>
                            <h4>Mass: {forceSensitive.mass} kg</h4>
                            <h4>Force User: {forceSensitive.forceUser}</h4>
                            <button onClick={ () => this.deleteHandler(forceSensitive.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }   
}

export default Characters