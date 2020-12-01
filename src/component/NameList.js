import React from 'react'
import Person from './Person'

function NameList() {
    const siblings = ['Kelvin','Samuel','Maryanne']
    const persons = [
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
    //const nameList = persons.map(person=><Person key={person.id} person={person}/>)
    const sibs = siblings.map((siblings,index)=><h1>{index} {siblings}</h1>)
        return (
        <div>{sibs}</div>
    )
}

export default NameList