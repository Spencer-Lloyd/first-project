import React from 'react'

export default function Header(props) {
    console.log("charcarter",props)
    var {character} = props
    return (
        <div>
             <h4>Name: { character.name }</h4>
            <h5>Height: { character.height} cm</h5>
            <h5>Hair Color: {character.hair_color}</h5>
            <h5>Gender: {character.gender}</h5>
            <h5>Eye Color: {character.eye_color}</h5>
            <h5>Birth Year: {character.birth_year}</h5>
            <h5>Mass: {character.mass} kg</h5>
        </div>
        )
}