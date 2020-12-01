import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name} age {person.age} power {person.skill}</h2>
        </div>
    )
}

export default Person
