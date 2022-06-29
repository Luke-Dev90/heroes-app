import React from 'react'
import { Link } from 'react-router-dom';

const CharacterByHero = ( {alter_ego,characters}) => {
    if( alter_ego === characters) return <></>
    return <>{characters}</>
}

export const HeroeCard = ( { id, superhero,publisher, alter_ego,first_appearance, characters} ) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className="row ">
                <div className="col-4">
                    <img src={heroImageUrl} className="card-img"  alt={superhero}/>
                </div>

                <div className="col-8">
                    <h5 className="card-body"> {superhero}</h5>
                    <p className='card-text'> {alter_ego}</p>
                    
                    <CharacterByHero characters={characters} alter_ego={alter_ego}/>
                    
                    <p className='card-text'>
                        <small className='text-muted'> {first_appearance}</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        Más información...
                    </Link>

                </div>
            </div>
        </div>
    </div>

  )
}
