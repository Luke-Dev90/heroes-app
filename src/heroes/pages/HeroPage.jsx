import React, { useMemo } from 'react'
import {Navigate,useParams, useNavigate}  from 'react-router-dom';
import { getHeroeById } from '../helpers/getHeroeById';


export const HeroPage = () => {
    const {id} = useParams();
    
    const navigate = useNavigate();
    
    const heroe = useMemo( () =>  getHeroeById(id) , [id] );

    const onNavigateReturn = () => {
        navigate(-1);
    }

    if(!heroe) { return <Navigate to='/marvel'/>}

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={`/assets/heroes/${id}.jpg`}
                    alt={ heroe.superhero} 
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li> <b>Alter ego:</b> {heroe.alter_ego}</li>
                    <li> <b>Publisher:</b> {heroe.publisher}</li>
                    <li> <b>First apperance:</b> {heroe.first_appearance}</li>
                </ul>
                <h5 className='mt-3'> Characters </h5>
                <p>{heroe.characters}</p>
                <button 
                    className='btn btn-outline-primary'
                    onClick={onNavigateReturn}>
                    Back
                </button>
            </div>
        </div>
    )
}
