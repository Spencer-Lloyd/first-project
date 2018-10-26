
let characters = []

let forceSensitive = []

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
        forceSensitive.push(character)
        result.status(200).send(forceSensitive)

    }
}