import React from 'react'

function Hero({heroname}) {
    if (heroname==='Eternal'){
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default Hero
