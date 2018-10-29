
import React, { Component } from 'react'
import axios from 'axios'

import Character from './character'

import './get-data.css'


class Characters extends Component {
    constructor () {
        super()
        this.state = {
            characters: [],
            forceSensitive: [],
            nonForceSensitive: [],
            quote: [],
            time: [],
            chuck: []
        }

        this.getData = this.getData.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.getRandomQuote = this.getRandomQuote.bind(this)
        this.getTime = this.getTime.bind(this)
        this.getChuck = this.getChuck.bind(this)
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

    nonForceSensitive(character) {
        axios.post('/api/people/sort', {character}).then( results => {
            this.setState({
                nonForceSensitive: results.data
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

    deleteNonForceHandler(id) {
        axios.delete(`/api/people/sort/${id}`).then( results => {
            this.setState({
                nonForceSensitive: results.data
            })
        })
    }

    getRandomQuote() {
        axios.get('https://talaikis.com/api/quotes/random/').then( results => {
            this.setState({
                quote: results.data.quote
            })
        })
    }

    getTime() {
        axios.get('http://worldclockapi.com/api/json/est/now').then( results => {
            console.log(results)
            this.setState({
                time: results.data.currentDateTime
            })
        })
    }
    
    getChuck() {
        axios.get('http://api.icndb.com/jokes/random').then( results => {
            console.log(results)
            this.setState({
                chuck: results.data.value.joke
            })
        })
    }

    // after things are done work the planents into the mix


    render () {
        console.log(this.state.forceSensitive)
        return (
            <div>
                <div className = "quote">
                    {this.state.quote}
                    <button onClick={this.getRandomQuote}>Quote</button>
                </div>
                <div className="time">
                    {this.state.time}
                    <button onClick={this.getTime}>Time</button>
                </div>
                <div className="chuck">
                    {this.state.chuck}
                    <button onClick={this.getChuck}>Chuck Noris Time</button>
                </div>
                <div className="display">
                    <div className='box1'>
                        <h1>Characters</h1>
                        <button onClick={this.getData}>Get Character Data</button>
                        {this.state.characters.map((character, index) => {
                            return (
                                <div key={ index }>
                                    <Character 
                                    character={character}/>
                                    {/* Step 1 - click button */}
                                    <button onClick={ () => this.forceSensitive(character)}>Has Force Powers</button>
                                    <button onClick={ () => this.nonForceSensitive(character)}>No Force Powers</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='box2'>
                        <h1>Force Users</h1>
                        {/* Make a component for each one of these */}
                        {/* In each component, have some state that you can update. Then when ready have a function that passes the id and the updated value on post request  */}
                        {this.state.forceSensitive.map((forceSensitive, index) => {
                            console.log('111', forceSensitive)
                            return (
                                <div key={ index }>
                                    <h3>Name: {forceSensitive.name}</h3>
                                    <h4>Height: {forceSensitive.height} cm</h4>
                                    <h4>Hair Color: {forceSensitive.hair_color}</h4>
                                    <h4>Gender: {forceSensitive.gender}</h4>
                                    <h4>Eye Color: {forceSensitive.eye_color}</h4>
                                    <h4>Birth Year: {forceSensitive.birth_year}</h4>
                                    <h4>Mass: {forceSensitive.mass} kg</h4>
                                    <h3>Force User: {forceSensitive.forceUser}</h3>
                                    <button onClick={ () => this.deleteHandler(forceSensitive.id)}>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className='box3'>
                        <h1>No Force Powers</h1>
                        {this.state.nonForceSensitive.map((nonForceSensitive, index) => {
                            console.log('222', nonForceSensitive)
                            return (
                                <div key={ index }>
                                    <h3>Name: {nonForceSensitive.name}</h3>
                                    <h4>Height: {nonForceSensitive.height} cm</h4>
                                    <h4>Hair Color: {nonForceSensitive.hair_color}</h4>
                                    <h4>Gender: {nonForceSensitive.gender}</h4>
                                    <h4>Eye Color: {nonForceSensitive.eye_color}</h4>
                                    <h4>Birth Year: {nonForceSensitive.birth_year}</h4>
                                    <h4>Mass: {nonForceSensitive.mass} kg</h4>
                                    <h3>Force User: {nonForceSensitive.forceUser}</h3>
                                    <button onClick={ () => this.deleteNonForceHandler(nonForceSensitive.id)}>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }   
}

export default Characters