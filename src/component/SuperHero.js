import React from 'react'
import ParentComponent from './ParentComponent'
import ParentSuperhero from './ParentSuperhero'

function SuperHero() {
    const heroes = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    const superhero = heroes.map(heroe => <ParentSuperhero heroname={heroe}></ParentSuperhero>) 
    return (
        superhero
    )
}

export default SuperHero
