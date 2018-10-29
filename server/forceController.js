
let characters = []

let forceSensitive = []

let nonForceSensitive = []

let id = 1

module.exports = {
    getCharacters: (request, result) => {
        result.status(200).send(characters)
    },

    createCharacters: (request, result) => {
        var {character} = request.body
        character.id = id
        id ++
        characters.push(character)
        result.status(200).send(characters)
    },
    //Step 4 - take information off req.body and use it to add to a forceSensitive array and send back to front end
    sorted: (request, result) => {
        var {character} = request.body
        character.id = id
        id ++
        character.forceUser = "The force is strong with this one"
        forceSensitive.push(character)
        result.status(200).send(forceSensitive)
    },

    nonForceSort: (request, result) => {
        var {character} = request.body
        character.id = id
        id ++
        character.forceUser = "This is not the character you are looking for"
        nonForceSensitive.push(character)
        result.status(200).send(nonForceSensitive)
    },

    deleteCharacter: (request, result) => {
        var {id} = request.params
        var index = forceSensitive.findIndex(forceSensitive => forceSensitive.id === Number(id))
        if(index !== -1) {
            forceSensitive.splice(index, 1)
        }
        result.status(200).send(forceSensitive)
    },

    deleteNonForce: (request, result) => {
        var {id} = request.params
        var index = nonForceSensitive.findIndex(nonForceSensitive => nonForceSensitive.id === Number(id))
        if(index !== -1) {
            nonForceSensitive.splice(index, 1)
        }
        result.status(200).send(nonForceSensitive)
    }

   
}